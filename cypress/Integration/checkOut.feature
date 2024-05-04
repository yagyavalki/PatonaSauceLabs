Feature: Checkout and order despatched functionality

    Scenario Outline: Verify Checkout and order despatched functionality
        Given User on the SauceDemo login page
        When User enter username "<username>" and password "<password>"
        And User click the login button
        And User can see Products page
        And User add Products to cart
        And User click on cart icon
        And User can see the added product price and description on the cart page
        And User click on checkout button
        And User fills details firstName "<firstName>" ,lastName "<lastName>",postalCode "<postalCode>"
        And User click on continue button
        And User can see checkout overview
        And User click on finish button
        Then user can see order despatched message
        Examples:
            | username      | password     | firstName  | lastName    | postalCode |
            | standard_user | secret_sauce | Yagyavalki | Ragidimilly | 600120     |