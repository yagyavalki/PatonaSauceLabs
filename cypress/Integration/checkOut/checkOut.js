var productName,price
Given(/^User on the SauceDemo login page$/, () => {
    cy.visit('/');
    cy.get('.login_logo').should('have.text', 'Swag Labs');
});

When(/^User enter username "([^"]*)" and password "([^"]*)"$/, (username,password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
});

And(/^User click the login button$/, () => {
	cy.contains('Login').click();
});

And(/^User can see Products page$/, () => {
    cy.title().should('eq','Swag Labs')
});

And(/^User add Products to cart$/, () => {
    cy.xpath('(//div[@class="inventory_list"]//div[@class="inventory_item"])').last().within(() => {
        cy.get('.inventory_item_name').then(($product) => {
            productName = $product.text();
            cy.log(productName);
            cy.get('.inventory_item_name').should('contain', productName);
            cy.get('.inventory_item_price').then(($price)=>{
                price =$price.text()
                cy.log(price)
            })
            cy.get('.btn_inventory').click();
        });
    });
})

And(/^User click on cart icon$/, () => {
    cy.get('[data-test="shopping-cart-link"]').click()
});

And(/^User can see the added product price and description on the cart page$/, () => {
    cy.get('[data-test="cart-desc-label"]').should('have.text','Description')
    cy.xpath('//div[@class="cart_item"]').last().within(()=>{
        cy.contains(productName)
        cy.contains(price)
    })
});

And(/^User click on checkout button$/, () => {
	cy.get('#checkout').should('have.text','Checkout').click()
});

And(/^User fills details firstName "([^"]*)" ,lastName "([^"]*)",postalCode "([^"]*)"$/, (firstName,lastName,postalCode) => {
	cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#postal-code').type(postalCode)
});

And(/^User click on continue button$/, () => {
    cy.get('#continue').click()
});

And(/^User can see checkout overview$/, () => {
    cy.get('span[class="title"]').should('have.text','Checkout: Overview')
});

And(/^User click on finish button$/, () => {
    cy.get('#finish').should('have.text','Finish').click()
});

Then(/^user can see order despatched message$/, () => {
    cy.get('.complete-header').should('have.text','Thank you for your order!')
    cy.get('.complete-text')
    .should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!')
});