# Krossover-cucumber-protractor
Protractor : (http://www.protractortest.org/) is a testing framework that enables interacting with an application on a web browser, in the same way a real user would interact.
 
Cucumber : (https://cucumber.io/) is a framework for writing high-level specifications of an application's functionality using plain text. 
It can be written and understood by non-technical people involved in a project. 
Cucumber’s language, 'Gherkin' describe software’s behaviour without detailing implementation details.
In this project we are going to tie both the frameworks together using the protractor-cucumber-framework.


## Setup
1)Install chrome
Open command prompt 
2)Install node.js from https://nodejs.org/en/download/
verify version using 'node -v' command
3)To Install protractor
Hit 'npm install -g protractor' on command line
Check installation by hitting 'protractor --version' command
4)Install Java
5)Install webdriver manager
6)Run webdriver-manager update command
7)Install cucumber
npm install cucumber
8)To get list of available packegs
nm -g list //Signficance of this is to check for selenium webdriver


// Configuration
The settings for a Protractor test is defined using a configuration file, `config/config.js`. 
In this test, we will focus on three options, that are required for the integration.

// specs
The `Specs` option defines *spec patterns* relative to the location of the configuration script. Here, we define .feature files consists of features, for example `login.feature`.

// framework
The `framework` options defines which test framework to use, such as Cucumber.

// cucumber options
The `cucumberOpts` defines the configuration of the Cucumber.js itself.

// Feature file
The next step is writing `.feature` file.File which includes Test cases written in gherkins language (Business requirement format)

// Step Definitions
Step definitions is where Gherkin's *documentation* turned into an actual *automated tests*. 

//package.json 
A package.json file contains meta data about project/module. It includes the list of dependencies to install from npm when running npm install


## Steps to run project
Create a folder at the same loction where protractor is installed and save all three files (config file,feature file and spec file) in that folder
Protractor is installed in C:\Users\[User_name]\AppData\Roaming\npm\node_modules this location.
Got to \protractor\folder_name
Hit webdriver-manager start //We can avoid this step by removing this line from configuration file 'seleniumAddress:http://localhost:4444/wd/hub'
Hit protractor Configuration_fileName.js
Ex protractor cucumberConfig_search.js

It will first check wheather selenium server is running or not.
Check the logs.
