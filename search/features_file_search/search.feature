Feature: Test search ability

 @dev
	Scenario: Test Search functionality
	Given Open krossover supoort in chrome "http://support.krossover.com/"
	When I enter "<search_term>"
	Then Verify search ablity for "<search_term>"
 
    |search_term|
    |Basketball Analytics|
    |Football Overview|
    |Soccer Overview|
