@Employee_data
Feature: Employee details

  
  Scenario: Add Employee record
    Given I Set POST employee service api endpoint
    When I Set request HEADER and body
    And Send a POST HTTP request
    Then I receive valid HTTP Response code as 200

  Scenario: Update Employee record
    Given I Set PUT employee service api endpoint
    When I update request body
    And Send a PUT HTTP request
    Then I receive valid HTTP Response code as 200

  Scenario: Get Employee record
    Given I Set GET employee service api endpoint
    When I Set request HEADER
    And Send GET HTTP request
    Then I receive valid HTTP Response code as 200

  Scenario: Delete Employee record
    Given I Set DELETE employee service api endpoint
    When I Send DELETE HTTP request
    Then I receive valid HTTP Response code as 200
