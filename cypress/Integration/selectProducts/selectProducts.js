var productName1, price1, price2, productName2
Given(/^User on the SauceDemo login page$/, () => {
    cy.visit('/');
    cy.get('.login_logo').should('have.text', 'Swag Labs');
});

When(/^User enter username "([^"]*)" and password "([^"]*)"$/, (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
});

And(/^User click the login button$/, () => {
    cy.contains('Login').click();
});

And(/^User can see Products page$/, () => {
    cy.title().should('eq', 'Swag Labs')
});
And(/^Sort the products with Low to High prices$/, () => {
    cy.get('.product_sort_container').select('lohi')
})
And(/^User add first and last Products$/, () => {
    //selecting first product
    cy.xpath('(//div[@class="inventory_list"]//div[@class="inventory_item"])').first().within(() => {
        cy.get('.inventory_item_name').then(($product) => {
            productName1 = $product.text();
            cy.log(productName1);
            cy.get('.inventory_item_name').should('contain', productName1);
            cy.get('.inventory_item_price').then(($price) => {
                price1 = $price.text()
                cy.log(price1)
            })
            cy.get('.btn_inventory').click();
        });
    });
    //selecting Last product
    cy.xpath('(//div[@class="inventory_list"]//div[@class="inventory_item"])').last().within(() => {
        cy.get('.inventory_item_name').then(($product) => {
            productName2 = $product.text();
            cy.log(productName2);
            cy.get('.inventory_item_name').should('contain', productName2);
            cy.get('.inventory_item_price').then(($price) => {
                price2 = $price.text()
                cy.log(price2)
            })
            cy.get('.btn_inventory').click();
        });
    });
});
And(/^User click on cart icon$/, () => {
    cy.get('[data-test="shopping-cart-link"]').click()
});

Then(/^User can see the added product price and description on the cart page$/, () => {
    cy.xpath('//div[@class="header_secondary_container"]').contains("Your Cart")
    cy.get('[data-test="cart-desc-label"]').should('have.text', 'Description')
    //check the first cart item
    cy.xpath('//div[@class="cart_item"]').first().within(() => {
        cy.contains(productName1)
        cy.contains(price1)
    })

    //check the secord cart item
    cy.xpath('//div[@class="cart_item"]').last().within(() => {
        cy.contains(productName2)
        cy.contains(price2)
    })
});
And(/^Clear Cookies$/,()=>{
    cy.logout()
})