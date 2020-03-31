
///<reference types="Cypress"/>
describe("Testing our volunteer form", function() {
    beforeEach(function() {
        cy.visit("http://localhost:3000/");
    });
    it("Add test to inputs and submit form", function() {
        cy.get('input[name="name"]').type("Christine")
            .should("have.value", "Christine");  //can use other selectors like have.class
        cy.get("input[name='email']")
            .type("email@email.com")
            .should("have.value", "email@email.com");
        cy.get('[data-cy=textarea]')
           .type("I want to learn cypress")
           .should("have.value", "I want to learn cypress");
        cy.get('[data-cy=positions]')
            .select("Yard Work")
            .should("have.value", "Yard Work");
        cy.get('[type="checkbox"]').check()
            .should('be.checked');
        cy.get("button").click();
    });
});