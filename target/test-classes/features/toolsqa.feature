@SampleFeature_ToolsQA
Feature: ToolsQA Feature

  @issue=BUG-22400 @tmsLink=OAT-4444 @CucumberPage @severity=blocker
  Scenario: To access cucumber tutorial page
    Given i aunthorized user able to access toolsqa site
    When im at home page and navigate to tutorials menu
    Then navigate to "Frameworks & Libraries" menu followed by "Cucumber"

  @Dummy_Scenario 
  Scenario: To verify allure reporting
    Given I have a valid user
    When I login to app
    Then homepage screen should be displayed
