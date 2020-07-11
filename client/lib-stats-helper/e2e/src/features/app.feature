Feature: Go to the homepage
    Display Regina Library

    Scenario: Home Page
        Given I am on the home page
        When I wait for the page to load
        Then I should see Regina Library title
    Scenario: Wrong LogIn
        Given I am on the login page
        When I enter wrong password
        Then I should see invalid password message