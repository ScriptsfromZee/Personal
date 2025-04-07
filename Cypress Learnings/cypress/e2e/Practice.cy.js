describe("Practice Suite 1",() => {
    it("Placed Order for Cashew", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.get(".product:visible").should('have.length', 4) // this checks that four visible items are shown when "ca" is serached for
        cy.contains('.product-name', 'Cashews').parents('.product').find('button').click() // this looks for the product name that has "cashews" and adds it to cart
        cy.get(".cart-icon").click() // This is the add to cart button 
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()
        cy.get("select").select("Libya") // This selects philippines from the list of countries when the drop down is clicked. 
        cy.get(".chkAgree").check().should('be.checked')
        cy.get("button").click()
})     
    it.only("Practice Actions for Cypress", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#mousehover").invoke("show")
        cy.contains("Top").click({force: true}) // This force clicks the element named "Top" 
        cy.url("https://rahulshettyacademy.com/AutomationPractice/#top") // This checks if the URL changes after the button is click
        cy.get("#opentab").invoke("removeAttr",'target').click()
        cy.origin("https://www.qaclickacademy.com/", () => {
            cy.get("#navbarSupportedContent").contains("Blog").click() // origin tells cypress that a new url is to be used. 
        })
})




})