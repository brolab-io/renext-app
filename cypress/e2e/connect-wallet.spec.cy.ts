describe("Test Connect Wallet", () => {
  it("Apply project", () => {
    cy.visit("https://renext.xyz/");

    // Wait for the page to load finish
    cy.wait(2000);
    cy.contains("Connect wallet").click();
    // find the popup extension chrome-extension://mdjmfdffdcmnoblignmgpommbefadffd/index.html

    cy.visit("chrome-extension://mdjmfdffdcmnoblignmgpommbefadffd/index.html#/portfolio");
  });
});
