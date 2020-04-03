$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("apiDemo.feature");
formatter.feature({
  "line": 2,
  "name": "Employee details",
  "description": "",
  "id": "employee-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Employee_data"
    }
  ]
});
formatter.before({
  "duration": 916045700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add Employee record",
  "description": "",
  "id": "employee-details;add-employee-record",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I Set POST employee service api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Set request HEADER and body",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Send a POST HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I receive valid HTTP Response code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Demo.i_Set_POST_employee_service_api_endpoint()"
});
formatter.result({
  "duration": 77507000,
  "status": "passed"
});
formatter.match({
  "location": "API_Demo.i_Set_request_HEADER_and_body()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "location": "API_Demo.send_a_POST_HTTP_request()"
});
formatter.result({
  "duration": 2190010800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "API_Demo.i_receive_valid_HTTP_Response_code_as(int)"
});
formatter.result({
  "duration": 2701600,
  "status": "passed"
});
formatter.before({
  "duration": 565600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Update Employee record",
  "description": "",
  "id": "employee-details;update-employee-record",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I Set PUT employee service api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I update request body",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Send a PUT HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I receive valid HTTP Response code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Demo.i_Set_PUT_employee_service_api_endpoint()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "location": "API_Demo.i_update_request_body()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({
  "location": "API_Demo.send_a_PUT_HTTP_request()"
});
formatter.result({
  "duration": 2407190500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "API_Demo.i_receive_valid_HTTP_Response_code_as(int)"
});
formatter.result({
  "duration": 153800,
  "status": "passed"
});
formatter.before({
  "duration": 1845100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get Employee record",
  "description": "",
  "id": "employee-details;get-employee-record",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I Set GET employee service api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I Set request HEADER",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Send GET HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I receive valid HTTP Response code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Demo.i_Set_GET_employee_service_api_endpoint()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "API_Demo.i_Set_request_HEADER()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "API_Demo.send_GET_HTTP_request()"
});
formatter.result({
  "duration": 497918300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "API_Demo.i_receive_valid_HTTP_Response_code_as(int)"
});
formatter.result({
  "duration": 153400,
  "status": "passed"
});
formatter.before({
  "duration": 2275400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Delete Employee record",
  "description": "",
  "id": "employee-details;delete-employee-record",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I Set DELETE employee service api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I Send DELETE HTTP request",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I receive valid HTTP Response code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_Demo.i_Set_DELETE_employee_service_api_endpoint()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "location": "API_Demo.i_Send_DELETE_HTTP_request()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "API_Demo.i_receive_valid_HTTP_Response_code_as(int)"
});
formatter.result({
  "duration": 175500,
  "status": "passed"
});
});