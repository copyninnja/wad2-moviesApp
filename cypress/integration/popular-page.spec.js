let movies;


describe("popular", () => {
    before(() => {
        cy.request(
      `https://api.themoviedb.org/3/movie/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&page=5&language=ja`
            )
            .its("body")
            .then((response) => {
                movies = response.results;
            });
    });

    describe("private route", () => {
          beforeEach(() => {
              cy.visit("/movies/popular");
          });
        it("should navigate to the login page due to private route", () => {
            cy.url().should("include",`/login`)
            cy.login()
            cy.wait(1000)
            cy.get('a[href="/"]').eq(-1).contains("You've already loginin, Back to HomePage")
            cy.get('a[href="/"]').eq(-1).click().then(()=>{
              cy.url().should("include",`/`)
            })
            cy.wait(1000)
            cy.percySnapshot();
        });

    });

    describe("check layout", () => {
      beforeEach(() => {
          cy.visit("/movies/popular");
          cy.wait(1000)
          cy.get("nav").find("li").eq(3).find("a").click();

      });


});

});