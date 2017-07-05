var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


module.exports = function loginPage() {
    var expect = chai.expect;

    this.setDefaultTimeout(500 * 1000);

    this.Given(/^Open krossover in chrome "([^"]*)"$/, function (callback) {
        browser.driver.get('https://v2-pre-prod-app.krossover.com/intelligence/login').then(callback);
    });

    this.When(/^I enter valid username and valid password$/, function (callback) {
        browser.driver.findElement(by.name('email')).sendKeys('valid email id');
        browser.driver.findElement(by.name('password')).sendKeys('password').then(callback);
    });

    this.Then(/^User should be able to Login successfully$/, function (callback) {
        browser.driver.findElement(by.id('sign-in-cta')).click();
		document.write('Login Succesfully').then(callback);
	});

	this.Given(/^Open krossover in google chrome "([^"]*)"$/, function (callback) {
        browser.driver.get('https://v2-pre-prod-app.krossover.com/intelligence/login').then(callback);
    });

	this.When(/^I enter invalid "([^"]*)" and "([^"]*)"$/, function (username, password, callback) {
        browser.driver.findElement(by.id('username')).sendKeys(username);
        browser.driver.findElement(by.id('password')).sendKeys(password);
		browser.driver.findElement(by.id('sign-in-cta')).click().then(callback);
    });
	this.Then(/^Then Validate "([^"]*)" and "([^"]*)" AND should throw error message$/, function (username, password, callback) {
	if(username == null || password == null)
	{
		//use double quotes as xpath contains single quotes
		int count = browser.driver.findElements(By.xpath("//data-error[text()='Required!']")).size();
		if(count>0)
		{
			document.write("Test Case Pass");
		}
	}	
    });

		this.Given(/^Open krossover site in chrome "([^"]*)"$/, function (callback) {
        browser.driver.get('https://v2-pre-prod-app.krossover.com/intelligence/login').then(callback);
    });

   this.When(/^I enter valid username and click on forgot your password link/, function (callback) {
        browser.driver.findElement(by.name('email')).sendKeys('valid email id');
        browser.driver.findElement(by.id('forgot-password-cta')).click().then(callback);
    });

    this.Then(/^User should be able to submit mail id and should get mail$/, function (callback) {
        browser.driver.findElement(by.name('email')).sendKeys('valid email id');
        browser.driver.findElement(by.className('button-forgot')).submit();
		//use double quotes as xpath contains single quotes
		int counts = driver.findElements(By.xpath("//span data-ng-bind-html[text()='Error requesting password reset for valid email id']")).size();
		if(counts>1)
		{
			document.write("Test Case fail").then(callback);
		}
	});


}
