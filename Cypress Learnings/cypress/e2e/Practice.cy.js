describe("Practice Suite",() => {
    it("New Things", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.get(".product:visible").should('have.length', 4) // this checks that four visible items are shown when "ca" is serached for

    })
})