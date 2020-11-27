describe("login", function () {
    beforeEach(() => {
        cy.visit("/login");
        // cy.wait(1000)
        // if (cy.get('a[href="/"]').contains()) { 
        //     cy.get("svg").eq(-1).click()
        //     cy.get('[data-cy="SignOut"]').click()
        // }
        cy.wait(1000)
        cy.percySnapshot();
    });
    const getFormBody = () => {
        return cy
            .get('form')
            .children().should('not.be.empty')
            .then(cy.wrap)
    }

    it("invalid email", () => {
        // test exeption
        getFormBody().get('input[name="email"]').click({
            force: true
        })
        getFormBody().get('input[name="email"]').type("123");
        getFormBody().get('[data-cy="userpassword"]').type("123");

        const stub = cy.stub()
        cy.on('window:alert', stub)
        getFormBody().get('button[data-cy="Sign In"]').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('The email address is badly formatted.')
            });
    });
    it("missing password", () => {
        // test exeption
        getFormBody().get('input[name="email"]').click()
        getFormBody().get('input[name="email"]').type("1234@qq.com");

        const stub = cy.stub()
        cy.on('window:alert', stub)
        getFormBody().get('button[data-cy="Sign In"]').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Wrong password.')
            });
    });
    it("right login", () => {
        // test exeption
        getFormBody().get('input[name="email"]').click()
        getFormBody().get('input[name="email"]').type("1234@qq.com");
        getFormBody().get('[data-cy="userpassword"]').type("123123");


        const stub = cy.stub()
        cy.on('window:alert', stub)
        getFormBody().get('button[data-cy="Sign In"]').click()
        cy.wait(2000);
        cy.get('a[href="/"]').eq(-1).contains("You've already loginin, Back to HomePage")
        cy.get("svg").eq(-1).click()
        console.log("fine")
        cy.get('[data-cy="SignOut"]').click()


    });


})
//    Cypress.Cookies.preserveOnce("cypressId", "cypressToken");
//         // 判断存在cookie值
//         cy.getCookie("cypressId").should("cypressToken")