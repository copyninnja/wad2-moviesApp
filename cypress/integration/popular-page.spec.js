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
    it("check cards layout", () => {   
    //   cy.get(".card").each(($card, index) => {
    //     cy.wrap($card)
    //         .get(".card-title")
    //         .should("be.verticallyAligned", "svg","left");
    // });    
        cy.get(`[data-cy=${movies[0].id}]`).find("img").should('be.horizontallyAligned', 
          `[data-cy=${movies[1].id}] img`, "top");
        cy.get(`[data-cy=${movies[4].id}]`).find("img").should('be.verticallyAligned', 
          `[data-cy=${movies[0].id}] img`, "left");

        cy.wait(1000)
        cy.percySnapshot();
        cy.logout()
    });

});




    // describe("From the Favorites page", () => {
    //     beforeEach(() => {
    //         cy.visit("/");
    //         cy.get(".card").eq(0).find("button").click();
    //         cy.get("nav").find("li").eq(2).find("a").click();
    //     });
    //     it("should navigate to the movies detail page and change the browser URL", () => {
    //         cy.get(".card").eq(0).find("img").click();
    //         cy.url().should("include", `/movies/${movies[0].id}`);
    //         cy.get("h2").contains(movies[0].title);
    //     });
    // });
    // describe("The Go Back button", () => {
    //     beforeEach(() => {
    //         cy.visit("/");
    //     });
    //     it("should navigate from home page to movie details and back", () => {
    //         cy.get(".card").eq(1).find("img").click();
    //         cy.get("svg[data-icon=arrow-circle-left]").click();
    //         cy.url().should("not.include", `/movies`);
    //         cy.get("h2").contains("No. Movies");
    //     });
    //     it("should navigate from favorites page to movie details and back", () => {
    //         cy.visit("/");
    //         cy.get(".card").eq(0).find("button").click();
    //         cy.get("nav").find("li").eq(2).find("a").click();
    //         cy.get(".card").eq(0).find("img").click();
    //         cy.get("svg[data-icon=arrow-circle-left]").click();
    //         cy.url().should("not.include", `${movies[0].id}`);
    //         cy.get("h2").contains("Favorite Movies");
    //     });
    // });

});