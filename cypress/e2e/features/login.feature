Feature: Login Functionality
  As a user of the-internet application
  I want to be able to login with valid credentials
  So that I can access secure areas of the application

  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I enter "tomsmith" as username
    And I enter "SuperSecretPassword!" as password
    And I click on the login button
    Then I should be logged in successfully
    And I should be redirected to the secure area

  Scenario: Failed login with invalid credentials
    Given I navigate to the login page
    When I enter "invaliduser" as username
    And I enter "invalidpassword" as password
    And I click on the login button
    Then I should see an error message 