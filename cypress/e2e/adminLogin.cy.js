const user = require("../fixtures/user.json");
const selector = require("../fixtures/selector.json");

describe("admin login ", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it("admin login verification valid", () => {
    cy.login(user.adminEmail, user.adminPass);
    cy.contains(selector.loginVerification).should("be.visible");
  });

  it("admin login verification invalid", () => {
    cy.login(user.adminEmail, user.invalidPassword);
    cy.contains(selector.passwordError).should("be.visible");
  });
});
