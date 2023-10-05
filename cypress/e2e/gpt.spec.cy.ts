describe("Test Apply Project", () => {
  beforeEach(() => {
    cy.viewport(1600, 1200);
    // Common setup code that runs before each test case
    cy.visit("http://localhost:3000");
    cy.contains("Apply Project").click();
    cy.url().should("include", "/apply");
  });

  it("Apply project with valid data", () => {
    // Fill in valid data
    cy.get("#name").type("Test Project");
    cy.get("#project_logo_url").type("https://oven.sh/logo.png");
    cy.get("#project_banner_url").type("https://oven.sh/share.png");
    cy.get("#project_email").type("contact@renext.xyz");
    cy.get("#project_website").type("https://renext.xyz");
    cy.get("div.kyc_radio_btn#Community").click().should("have.class", "active");
    cy.get("form").submit();
    cy.get(".page_header_progressbar > span").should("have.text", "STEP 2 OF 3");
  });

  it("Apply project with missing required data", () => {
    // Submit the form without filling in required data
    cy.get("form").submit();

    cy.get(".page_header_progressbar > span").should("have.text", "STEP 1 OF 3");
  });

  it("Apply project with a long project name", () => {
    // Enter a long project name
    cy.get("#name").type("ThisIsALongProjectNameThatExceedsTheMaxLengthAllowedByTheForm");
    cy.get("form").submit();

    // Verify error message for the maximum character limit
    cy.get("#name").parent().contains("must be at most 50 characters");
  });

  it("Apply project with an invalid image URL", () => {
    // Enter an invalid image URL
    cy.get("#project_logo_url").type("invalid_url");
    cy.get("form").submit();

    // Verify error message for an invalid image URL
    cy.get("#project_logo_url").parent().contains("must be a valid image url");
  });

  it("Apply project with an invalid email", () => {
    // Enter an invalid email
    cy.get("#project_email").type("invalid_email");
    cy.get("form").submit();

    // Verify error message for an invalid email
    cy.get("#project_email").parent().contains("must be a valid email");
  });

  it("Apply project with an invalid website URL", () => {
    // Enter an invalid website URL
    cy.get("#project_website").type("invalid_url");
    cy.get("form").submit();

    // Verify error message for an invalid website URL
    cy.get("#project_website").parent().contains("must be a valid url");
  });

  it("Apply project with a very short project name", () => {
    // Enter a very short project name
    cy.get("#name").type("A");
    cy.get("form").submit();

    // Verify error message for a too short project name
    cy.get("#name").parent().contains("must be at least 3 characters");
  });

  it("Apply project with a valid project name and logo but missing other fields", () => {
    // Enter a valid project name and logo URL but leave other fields empty
    cy.get("#name").type("Test Project");
    cy.get("#project_logo_url").type("https://oven.sh/logo.png");
    cy.get("form").submit();

    cy.get(".page_header_progressbar > span").should("have.text", "STEP 1 OF 3");
  });

  it("Apply project with valid data and select 'Individual' KYC option", () => {
    // Fill in valid data
    cy.get("#name").type("Test Project");
    cy.get("#project_logo_url").type("https://oven.sh/logo.png");
    cy.get("#project_banner_url").type("https://oven.sh/share.png");
    cy.get("#project_email").type("contact@renext.xyz");
    cy.get("#project_website").type("https://renext.xyz");

    // Select 'Individual' KYC option
    cy.get("div.kyc_radio_btn#Web3").click().should("have.class", "active");
    cy.get("form").submit();

    // Verify successful submission
    cy.url().should("include", "/success");
    cy.contains("Your project application was successful");
  });
});
