Feature: Cart functionality

    Scenario Outline: Verify product prise and descreption on cart page
        Given User on the SauceDemo login page
        When User enter username "<username>" and password "<password>"
        And User click the login button
        And User can see Products page
        And Sort the products with Low to High prices
        And User add first and last Products
        And User click on cart icon
        Then User can see the added product price and description on the cart page
         Examples:
            | username      | password   | 
            | standard_user | secret_sauce |