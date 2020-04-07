package stepDefinitions;

import static com.jayway.restassured.RestAssured.given;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.parsing.Parser;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Bitbucket {
	// Declarations
		private Logger logger;
		private String uri;
		
		@Before
		public void setup()
		{
			logger = Logger.getLogger(Bitbucket.class.getName());
			RestAssured.defaultParser = Parser.JSON;
			PropertyConfigurator.configure(System.getProperty("user.dir") + File.separator + "log4j.properties");
		}

		@Given("^I have an (.*)$")
		public void i_have_an_https_api_bitbucket_org_repositories(String uri) {
			//RestAssured.defaultParser = Parser.JSON;

			//PropertyConfigurator.configure(System.getProperty("user.dir") + File.separator + "log4j.properties");
			//logger = Logger.getLogger(Bitbucket.class.getName());

			this.uri = new String(uri);
			logger.info("=> The API URI is : " + this.uri);
		}

		@When("^I request repositories of an (.*)$")
		public void i_request_repositories_of_an_alicse(String user) {
			String newURI = this.uri + "/" + user;
			this.uri = newURI;
			String response = given().when().get(newURI).getBody().asString();
			logger.info("=> The user '" + user + "' respositories response from uri '" + newURI + "' is : " + response);
		}

		@Then("^I should get the response status code as (\\d+)$")
		public void i_should_get_the_response_status_code_as(int statusCode) {
			int code = given().get(this.uri).then().assertThat().statusCode(statusCode).and().extract().statusCode();
			logger.info("=> The reponse status code of uri '" + this.uri + "' is : " + code);
		}

		@Then("^I should see (.*) in the response$")
		public void i_should_see_bdd_java_framework_forall_Swiggy_Coding_Challenge_in_a_response(String repositories) {
			List<String> actualResult = given().when().get(this.uri).then().contentType(ContentType.JSON).extract()
					.response().jsonPath().getList("values.name");
			List<String> expectedResult = Arrays.stream(repositories.split(",")).map(value -> value.trim())
					.collect(Collectors.toList());
			logger.info("=> The actual repositories list from '" + this.uri + "' response is : " + actualResult);
			logger.info("=> The expected repositories list from passed from the feature file is : " + expectedResult);
			assertTrue(actualResult.containsAll(expectedResult));
		}

		@Given("^I have a valid user$")
		public void i_have_a_valid_user() throws Throwable {
			logger.info("Printing given");
			System.out.println("Printing given");
		}

		@When("^I login to app$")
		public void i_login_to_app() throws Throwable {
			logger.info("Printing when");
			System.out.println("Printing when");
		}

		@Then("^homepage screen should be displayed$")
		public void homepage_screen_should_be_displayed() throws Throwable {
			logger.info("Printing then");
			System.out.println("Printing then");
		}
		
}
