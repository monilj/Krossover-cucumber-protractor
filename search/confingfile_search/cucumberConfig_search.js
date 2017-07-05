
exports.config = {

	  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

    framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Spec patterns are relative to this directory.
    specs: ['search.feature'],

    capabilities: {
        'browserName': 'chrome',
        'version': 'ANY'
    },

    baseUrl:'http://localhost:8080/',

    cucumberOpts: {
        require: 'searchSpec.js',',
        tags: '@dev',
        format: 'pretty',
        profile: false,
        'no-source': true
    }
};