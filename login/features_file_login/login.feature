Feature: Test Login functionality

 @dev
  Scenario: Test valid credential
    Given Open krossover in chrome "https://v2-pre-prod-app.krossover.com/intelligence/login"
    When I enter valid username and valid password
    Then User should be able to Login successfully
 
 Scenario: Test invalid credential
    Given Open krossover in google chrome "https://v2-pre-prod-app.krossover.com/intelligence/login"
    When I enter invalid "<username>" and invalid "<password>"
      |username|password|
      |kmonil.joshi@gmail.com||
      ||12341233|
    Then Validate "<username>" and "<password>" AND should throw error message
	|username|password|
	|kmonil.joshi@gmail.com||
	||12341233|

	Scenario: Test forgot password
    Given Open krossover site in chrome "https://v2-pre-prod-app.krossover.com/intelligence/login"
    When I enter valid username AND click on forgot your password link
    Then User should be able to submit mail id and should get mail
