describe("Test Apply Project", () => {
  it("Apply project", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Apply Project").click();

    cy.url().should("include", "/apply");

    // Check should have text STEP 1 OF 3
    cy.get(".page_header_progressbar > span").should("have.text", "STEP 1 OF 3");

    // Check should have text Project Information
    cy.get("#name").type(" ");
    cy.get("#project_logo_url").type("this_shoud_throw_error");
    cy.get("#project_banner_url").type("this_shoud_throw_error");
    cy.get("#project_email").type("this_shoud_throw_error");
    cy.get("#project_website").type("this_shoud_throw_error");
    cy.get("form").submit();

    cy.get("#name").parent().contains("must be at least 3 characters");
    cy.get("#project_logo_url").parent().contains("must be a valid image url");
    cy.get("#project_banner_url").parent().contains("must be a valid image url");
    cy.get("#project_email").parent().contains("must be a valid email");
    cy.get("#project_website").parent().contains("must be a valid url");

    cy.get("#name").clear().type("Test Project");
    cy.get("#project_logo_url").clear().type("https://oven.sh/logo.png");
    cy.get("#project_banner_url").clear().type("https://oven.sh/share.png");
    cy.get("#project_email").clear().type("contact@renext.xyz");
    cy.get("#project_website").clear().type("https://renext.xyz");
    cy.get("div.kyc_radio_btn#Community").click().should("have.class", "active");
    cy.get("form").submit();

    // STEP 2 OF 3
    cy.get(".page_header_progressbar > span").should("have.text", "STEP 2 OF 3");
  });
});
