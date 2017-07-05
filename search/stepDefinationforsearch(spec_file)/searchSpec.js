var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


module.exports = function loginPage() {
    var expect = chai.expect;

    this.setDefaultTimeout(500 * 1000);

    this.Given(/^Open krossover supoort in chrome "([^"]*)"$/, function (callback) {
        browser.driver.get('http://support.krossover.com/').then(callback);
    });

    this.When(/^I enter "([^"]*)"$/, function (search_term,callback) {
        browser.driver.findElement(by.id('q')).sendKeys(search_term);
        browser.driver.findElement(By.name('q')).sendKeys(Keys.ENTER);.then(callback);
    });

    this.Then(/^Verify search ablity for "([^"]*)"$/, function (search_term,callback) {
		//use double quotes as xpath contains single quotes
		Var str = driver.findElement(By.xpath(".//*[@id='content']/div/div/div/div[1]/h2")).getText();
		if(str.includes(search_term)&& str.includes("results"))
		{
			document.write('Test Case pass').then(callback);
		}
		else
		{
			document.write('Test case fail').then(callback);
		}
	});

}