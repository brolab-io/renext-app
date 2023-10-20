import React from "react";
import Button from "./index";

describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button>Test</Button>);
    cy.contains("Test");
    // Disabled button
    cy.mount(<Button disabled>Disabled</Button>);
    cy.contains("Disabled");
    cy.get("button").should("be.disabled");
  });
});
