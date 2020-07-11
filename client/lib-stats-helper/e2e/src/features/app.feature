Feature: Homepage and Logging In
    Display Regina Library

    Scenario: Home Page
        Given I am on the home page
        When I wait for the page to load
        Then I should see Regina Library title
    Scenario: Wrong LogIn
        Given I am on login page
        When I enter the wrong username
        And I enter the wrong password
        And I click submit
        And I try to access internal page
        Then Navigation will redirect me back homepage