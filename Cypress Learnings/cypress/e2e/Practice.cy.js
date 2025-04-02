describe("Practice Suite 1",() => {
    it("Placed Order for Cashew", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.get(".product:visible").should('have.length', 4) // this checks that four visible items are shown when "ca" is serached for
        cy.contains('.product-name', 'Cashews').parents('.product').find('button').click() // this looks for the product name that has "cashews" and adds it to cart
        cy.get(".cart-icon").click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()
        cy.get("select").select("Philippines")
        cy.get(".chkAgree").check().should('be.checked')
        cy.get("button").click()
})     
})