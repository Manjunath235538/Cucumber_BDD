$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/toolsqa.feature");
formatter.feature({
  "name": "showcasing BDD framework using Toolsqa site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FeatureTag"
    },
    {
      "name": "@tmsLink\u003dOAT-4444"
    },
    {
      "name": "@flaky"
    },
    {
      "name": "@issue\u003dBUG-22400"
    },
    {
      "name": "@SampleFeature_Toolsqa"
    }
  ]
});
formatter.scenario({
  "name": "To access cucumber tutorial",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FeatureTag"
    },
    {
      "name": "@tmsLink\u003dOAT-4444"
    },
    {
      "name": "@flaky"
    },
    {
      "name": "@issue\u003dBUG-22400"
    },
    {
      "name": "@SampleFeature_Toolsqa"
    },
    {
      "name": "@Access_Cucumber_tutorial"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i aunthorized user able to access toolsqa site",
  "keyword": "Given "
});
formatter.match({
  "location": "ToolsqaStepDefinition.i_aunthorized_user_able_to_access_toolsqa_site()"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "im at home page and navigate to tutorials menu",
  "keyword": "When "
});
formatter.match({
  "location": "ToolsqaStepDefinition.im_at_home_page_and_navigate_to_tutorials_menu()"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"Frameworks \u0026 Libraries\" menu followed by \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolsqaStepDefinition.navigate_to_menu_followed_by(String,String)"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify allure reporting is  Working or not",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FeatureTag"
    },
    {
      "name": "@tmsLink\u003dOAT-4444"
    },
    {
      "name": "@flaky"
    },
    {
      "name": "@issue\u003dBUG-22400"
    },
    {
      "name": "@SampleFeature_Toolsqa"
    },
    {
      "name": "@sample"
    },
    {
      "name": "@severity\u003dblocker"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a valid user",
  "keyword": "Given "
});
formatter.match({
  "location": "ToolsqaStepDefinition.i_have_a_valid_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login to app",
  "keyword": "When "
});
formatter.match({
  "location": "ToolsqaStepDefinition.i_login_to_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage screen should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolsqaStepDefinition.homepage_screen_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});