
Given(/^User on the SauceDemo login page$/, () => {
    cy.visit('/');
    cy.get('[class="login_logo"]').contains("Swag Labs");
});

When(/^User enter username "([^"]*)" and password "([^"]*)"$/, (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
});

When(/^User click the login button$/, () => {
    cy.contains('Login').click();
});

Then(/^User should see an error message saying "([^"]*)"$/, (errorMessage) => {
    cy.get('[data-test="error"]').should('have.text', errorMessage);
})