package stepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.testng.Assert;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utilities.RandomNumber;

public class API_Demo {

	public static RequestSpecification respec;
	public static Response res;
	public static JsonPath jpath;
	public static String methodURL;
	public static String mainBody;
	public static String ranString;
	public static String empName;
	public static String output;;
	public static Properties pro;
	public static FileInputStream fin;
	public static RandomNumber random;
	public static Map<String, String> mstring=new HashMap<String, String>();
	
	@Before
	public void setup() throws IOException
	{
		pro=new Properties();
		fin=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\files\\environmentDetails.properties");
		pro.load(fin);
		RestAssured.useRelaxedHTTPSValidation();
		respec = RestAssured.given();
		random=new RandomNumber();
	}
	
	@Given("I Set POST employee service api endpoint")
	public void i_Set_POST_employee_service_api_endpoint() throws Throwable {
		
		methodURL=pro.getProperty("DemoPOST.URL");	
	}

	@When("^I Set request HEADER and body$")
	public void i_Set_request_HEADER_and_body() throws Throwable {
		mstring.put("Content-Type", "application/json");
		empName="Emp"+random.getRandomNumber4Digits();
		mainBody = "{\"name\":\""+empName+"\",\"salary\":\"123\",\"age\":\"23\"}";
		
	}

	@When("^Send a POST HTTP request$")
	public void send_a_POST_HTTP_request() throws Throwable {
		res=respec.relaxedHTTPSValidation().headers(mstring).body(mainBody).post(methodURL);
		System.out.println(res);
	    output=res.getBody().asString();
	    System.out.println(output);
	}

	@Then("^I receive valid HTTP Response code as (\\d+)$")
	public void i_receive_valid_HTTP_Response_code_as(int code) throws Throwable {
		Assert.assertTrue(res.getStatusCode()==code);
	}

	@Given("^I Set PUT employee service api endpoint$")
	public void i_Set_PUT_employee_service_api_endpoint() throws Throwable {
		methodURL=pro.getProperty("DemoPUT.URL");	
	}

	@When("^I update request body$")
	public void i_update_request_body() throws Throwable {
		mstring.put("Content-Type", "application/json");
		empName="Emp"+random.getRandomNumber4Digits();
		mainBody = "{\"name\":\""+empName+"\",\"job\":\"123\"}";
	}

	@When("^Send a PUT HTTP request$")
	public void send_a_PUT_HTTP_request() throws Throwable {
		res=respec.relaxedHTTPSValidation().headers(mstring).body(mainBody).put(methodURL);
		System.out.println(res);
	    output=res.getBody().asString();
	    System.out.println(output);
	}

	@Given("^I Set GET employee service api endpoint$")
	public void i_Set_GET_employee_service_api_endpoint() throws Throwable {
		methodURL=pro.getProperty("DemoGET.URL");	
	}

	@When("^I Set request HEADER$")
	public void i_Set_request_HEADER() throws Throwable {
		mstring.put("Content-Type", "application/json");
	}

	@When("^Send GET HTTP request$")
	public void send_GET_HTTP_request() throws Throwable {
		res=respec.relaxedHTTPSValidation().headers(mstring).get(methodURL);
		System.out.println(res);
	    output=res.getBody().asString();
	    System.out.println(output);
	}

	@Given("^I Set DELETE employee service api endpoint$")
	public void i_Set_DELETE_employee_service_api_endpoint() throws Throwable {
	   System.out.println("Yet to get delete end point");
	}

	@When("^I Send DELETE HTTP request$")
	public void i_Send_DELETE_HTTP_request() throws Throwable {
		System.out.println("Yet to get delete end point");
	}
}
