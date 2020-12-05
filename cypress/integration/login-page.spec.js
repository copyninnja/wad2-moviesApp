describe("login", function () {
    before(() => {
        cy.visit("/");
        cy.get("svg").eq(2).click();
        cy.get('[data-cy="SignIn"]').click();
        cy.reload();
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
    afterEach(() => {
        getFormBody().get('input[name="email"]').clear();
        getFormBody().get('input[name="password"]').clear();
    })

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

        Cypress.on('window:alert', cy.spy())

        getFormBody().get('button[data-cy="Sign In"]').click()
            .then(() => {
                cy.on('window:alert', (str) => {
                    expect(str).to.equal(`Wrong password.`)
                })
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
        cy.reload()

    });


})
//    Cypress.Cookies.preserveOnce("cypressId", "cypressToken");
//         // 判断存在cookie值
//         cy.getCookie("cypressId").should("cypressToken")