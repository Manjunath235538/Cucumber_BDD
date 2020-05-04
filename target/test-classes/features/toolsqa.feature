@FeatureTag
@tmsLink=OAT-4444
@flaky
@issue=BUG-22400
@SampleFeature_Toolsqa
Feature: showcasing BDD framework using Toolsqa site

  @Access_Cucumber_tutorial
  Scenario: To access cucumber tutorial
    Given i aunthorized user able to access toolsqa site
    When im at home page and navigate to tutorials menu
    Then navigate to "Frameworks & Libraries" menu followed by "Cucumber"

  @sample @severity=blocker
  Scenario: To verify allure reporting is  Working or not
    Given I have a valid user
    When I login to app
    Then homepage screen should be displayed
