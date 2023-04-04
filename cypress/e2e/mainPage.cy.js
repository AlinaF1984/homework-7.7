const selector = require("../fixtures/selector.json");

describe("home page display", () => {
  it("the transition to the page", () => {
    cy.visit("http://qamid.tmweb.ru");
    cy.get(selector.title).should("contain.text", "Идёмвкино");
    cy.get(selector.daysWeek).should("have.length", 7);
    cy.get(selector.chooseMovie).should("be.visible");
  });
});
