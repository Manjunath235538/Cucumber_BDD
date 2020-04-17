package stepDefinitions;

import java.io.File;
import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.vimalselvam.cucumber.listener.Reporter;

//import com.vimalselvam.cucumber.listener.Reporter;

import actions.DemoActions;
import actions.WpmobilePackActions;

import helpers.Environment;
import helpers.SharedDriver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.DemoPageObjects;
import pageObjects.WpmobilePackPageObjects;
import utilities.AllureReports;
import utilities.GetScreenShot;

public class ToolsqaStepDefinition {

	public static final String BROWSER="Chrome"; //values Chrome,FireFox,IE
	public static String env="ToolsQA";
	public static WebDriver driver;
	static String scenarioName;
	GetScreenShot screenshot;
	DemoPageObjects demoPO;
	WpmobilePackPageObjects wpPO;
	DemoActions demoA;
	WpmobilePackActions wpAction;
	SharedDriver shdriver;
	WebDriverWait wait;
	Environment environment;
	AllureReports alrep;

	@Before
	public void browserLaunch(Scenario scenario) throws Exception {	

		System.out.println("Before scenario------------------excecuted");
		shdriver = new SharedDriver(BROWSER);
		driver = shdriver.getDriver();
		System.out.println("printing driver "+driver);
		screenshot = new GetScreenShot();
		scenarioName=scenario.getName();
		environment=new Environment(env);
		wait=new WebDriverWait(driver, 20);

		demoA = new DemoActions(driver);
		wpAction=new WpmobilePackActions(driver);
		alrep=new AllureReports(driver);
		demoPO=new DemoPageObjects();
		wpPO=new WpmobilePackPageObjects();

		demoPO = PageFactory.initElements(driver, DemoPageObjects.class);
		wpPO = PageFactory.initElements(driver, WpmobilePackPageObjects.class);

	}
	@Given("^i aunthorized user able to access toolsqa site$")
	public void i_aunthorized_user_able_to_access_toolsqa_site() throws Throwable {
		driver.get(environment.getURL());
		wait.until(ExpectedConditions.visibilityOf(demoPO.tutorial));
		alrep.saveScreenshot();
		//demoA.captureSS(scenario);
		//Reporter.addScreenCaptureFromPath(screenshot.capture(driver, scenarioName));
		
	}

	@When("^im at home page and navigate to tutorials menu$")
	public void im_at_home_page_and_navigate_to_tutorials_menu() throws Throwable {
		Actions act=new Actions(driver);
		act.moveToElement(demoPO.tutorial).build().perform();
		alrep.saveScreenshot();
		//demoA.captureSS(scenario);
		//Reporter.addScreenCaptureFromPath(screenshot.capture(driver, scenarioName));
	}


	@Then("^navigate to \"([^\"]*)\" menu followed by \"([^\"]*)\"$")
	public void navigate_to_menu_followed_by(String l1menu, String l2menu) throws Throwable {
		demoA.clickL1Menu(l1menu, l2menu, scenarioName);
		wait.until(ExpectedConditions.visibilityOf(demoPO.cucumberTxt));
		//demoA.captureSS(scenario);
		//assert.assertEquals("Cucumber Tutorial", demoPO.cucumberTxt.getText());
		Assert.assertTrue("Cucumber Tutorial".trim().equals(demoPO.cucumberTxt.getText().trim()));
		//assert.assertTrue("Cucumber Tutorial".trim().equals(demoPO.cucumberTxt.getText().trim());
		alrep.saveScreenshot();
		//Reporter.addScreenCaptureFromPath(screenshot.capture(driver, scenarioName));
	}
	
	@Given("^I have a valid user$")
	public void i_have_a_valid_user() throws Throwable {
		
		System.out.println("Printing given");
	}

	@When("^I login to app$")
	public void i_login_to_app() throws Throwable {
		
		System.out.println("Printing when");
	}

	@Then("^homepage screen should be displayed$")
	public void homepage_screen_should_be_displayed() throws Throwable {
		
		System.out.println("Printing then");
		
	}
	
	@After
	public void afterScenario(Scenario scenario) throws IOException{
		System.out.println(scenario.isFailed());
	        if(scenario.isFailed()){
	            byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenshot, "image/png");
	            scenario.write("Failed test scenario");
	        // Reporter.addScreenCaptureFromPath(screenshot.getAbsolutePath());
	        }
	      }
}
