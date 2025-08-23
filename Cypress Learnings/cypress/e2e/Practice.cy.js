describe("Practice Suite 1", () => {
  it("Placed Order for Cashew", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.get(".product:visible").should("have.length", 4); // this checks that four visible items are shown when "ca" is serached for
    cy.contains(".product-name", "Cashews")
      .parents(".product")
      .find("button") // this adds cashews to the cart by searching for the product name that has "cashews" under the available products in the parent DOM
      .click(); // this looks for the product name that has "cashews" and adds it to cart
    cy.get(".cart-icon").click(); // This is the add to cart button
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    cy.get("select").select("Libya").should("have.value", "Libya"); // This selects Libya from the list of countries when the drop down is clicked.
    cy.get(".chkAgree").check().should("be.checked");
    cy.get("button").click();

    //Another way to add cashews to the cart is ....
    cy.wait(2000); // We have to wait because the site has to be load again after using method 1
    cy.get(".search-keyword").type("ca");
    cy.get(".product")
      .filter(":contains('Cashews')") // this scans the parent Dom and filters out the product that contains cashews and adds it to cart
      .find("button")
      .click();
    cy.get(".cart-icon").click(); // This is the add to cart button
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    cy.get("select").select("Nigeria").should("have.value", "Nigeria"); // This selects Libya from the list of countries when the drop down is clicked.
    cy.get(".chkAgree").check().should("be.checked");
    cy.get("button").click();

    // The Third Way is by...
    cy.wait(2000); // We have to wait because the site has to be load again after using method 2
    cy.get(".search-keyword").type("ca");
    cy.contains(".product", "Cashews") // Here we use the "contains" method to search for cashews and add it to cart instead of using method 1 where we scanned through the parent dom first
      .find("button")
      .click();
    cy.get(".cart-icon").click(); // This is the add to cart button
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    cy.get("select").select("Libya").should("have.value", "Libya"); // This selects Libya from the list of countries when the drop down is clicked.
    cy.get(".chkAgree").check().should("be.checked");
    cy.get("button").click();
  });

  it("Practice Actions for Cypress", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#mousehover").invoke("show");
    cy.contains("Top").click({ force: true }); // This force clicks the element named "Top"
    cy.url("https://rahulshettyacademy.com/AutomationPractice/#top"); // This checks if the URL changes after the button is click
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.origin("https://www.qaclickacademy.com/", () => {
      cy.get("#navbarSupportedContent").contains("Blog").click(); // origin tells cypress that a new url is to be used.
      cy.contains("QAClickAcademy Blog").should("be.visible");
    });
  });

  //This is how you select options from dropdowns in static dropdowns
  it("Static Dropdown", () => {
    cy.visit("https://letcode.in/dropdowns");
    cy.get("#country").select("India").should("have.value", "India");
  });

  // This is how you handle dynamic dropdowns in cypress
  it("Dynamic Dropdown ", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#autocomplete").type("in");
    cy.get(".ui-menu-item").each(($e1, index, $list) => {
      if ($e1.text() === "Dominica") {
        cy.wrap($e1).click().should("have.text", "Dominica");
      }
    })
  })

    // This is how you handle tables in cypress
    it.only("Getting Values from Tables", function () {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
        const text = $e1.text();
        if (text.includes("Bugzilla")) {
          cy.get("tr td:nth-child(2)")
            .eq(index)
            .next()
            .then(function (price) {
              const priceText = price.text();
              expect(priceText).to.equal("25");
            });
        }
      });
    });

    it("Verify date selection", () => {
      const monthNumber = "6";
      const date = "15";
      const year = "2027";
      const expectedList = [monthNumber, date, year];

      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
      cy.wait(5000);
      cy.get(".react-date-picker__inputGroup").click();

      cy.get(".react-calendar__navigation__label").click();
      cy.get(".react-calendar__navigation__label").click();
      cy.contains("button", year).click();
      cy.get(".react-calendar__year-view__months__month")
        .eq(Number(monthNumber) - 1)
        .click();
      cy.contains("abbr", date).click();

      //Assertion
      cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
        cy.wrap($el).invoke("val").should("eq", expectedList[index]);
      });
    });
  });

