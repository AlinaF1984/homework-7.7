const user = require("../fixtures/user.json");
const selector = require("../fixtures/selector.json");

describe(" booking tickets through the administrator", () => {
  it("booking tickets", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(user.adminEmail, user.adminPass);
    cy.contains(user.deskForEqual).should("be.visible");
    cy.get(selector.hallOpening).contains(selector.nameHall);
    cy.visit("/");
    cy.get(selector.chooseTimeSession).click();
    cy.get(selector.chooseFilm).contains(selector.timeSession).click();
    cy.contains(selector.timeSessionForEqual).should("be.visible");
    cy.get(selector.chooseChair).click();
    cy.get(selector.pushButton).click();
    cy.contains("2/5").should("be.visible");
    cy.get(selector.pushButton).should("be.visible");
  });
});
