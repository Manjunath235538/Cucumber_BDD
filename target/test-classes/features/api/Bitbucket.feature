Feature: Bitbucket API Automation

  @bitbucket
  Scenario Outline: Validate Swiggy online food order flow
    Given I have an <API>
    When I request repositories of an <User>
    Then I should get the response status code as <Code>
    And I should see <Repositories> in the response

    Examples: 
      | API                                        | User    | Code | Repositories                                                                   |
      | https://api.bitbucket.org/2.0/repositories | alicse3 |  200 | Automation with Selenium, Tookitaki-OrangeHRM, Swiggy-Coding-Challenge, Gradle |

  @sample
  Scenario: To verify generic Working or not
    Given I have a valid user
    When I login to app
    Then homepage screen should be displayed
