package stepDefinitions;

import java.io.File;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import actions.DemoActions;
import actions.WpmobilePackActions;
import helpers.Environment;
import helpers.FeatureData;
import helpers.SharedDriver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.DemoPageObjects;
import pageObjects.WpmobilePackPageObjects;
import utilities.AllureReports;
import utilities.GetScreenShot;

public class WpmobileStepDefinition {

	private static final String BROWSER="Chrome"; //values Chrome,FireFox,IE
	private final String screenshotRequiredFlag="YES";//vales yes or no	
	private static String env="WpMobile";
	private static WebDriver driver;
	private static String scenarioName;
	GetScreenShot screenshot;
	DemoPageObjects demoPO;
	WpmobilePackPageObjects wpPO;
	DemoActions demoA;
	WpmobilePackActions wpAction;
    AllureReports alrep;;
	SharedDriver shdriver;
	WebDriverWait wait;
	Environment environment;
	private Logger log;
	private Scenario scenario;

	@Before
	public void initialSetup(Scenario scenario) throws Exception {	
		System.out.println("Before scenario------------------excecuted");
		PropertyConfigurator.configure(System.getProperty("user.dir")+File.separator+"log4j.properties");
	    log=Logger.getLogger(WpmobileStepDefinition.class.getName());
	    this.scenario=scenario;
		shdriver = new SharedDriver(BROWSER,log);
		driver = shdriver.getDriver();
		System.out.println(driver);
		screenshot = new GetScreenShot();
		scenarioName=scenario.getName();
		environment=new Environment(env);
		wait=new WebDriverWait(driver, 20);
		demoA = new DemoActions(driver,log);
		wpAction=new WpmobilePackActions(driver);
		alrep=new AllureReports(driver);
		demoPO=new DemoPageObjects();
		wpPO=new WpmobilePackPageObjects();
		demoPO = PageFactory.initElements(driver, DemoPageObjects.class);
		wpPO = PageFactory.initElements(driver, WpmobilePackPageObjects.class);
	}
	

	@Given("^i have privileges to access wpmobilePack site$")
	public void i_have_privileges_to_access_wpmobilePack_site() throws Throwable {
		driver.get(environment.getURL());
		wait.until(ExpectedConditions.visibilityOf(wpPO.homeGrid));
		alrep.takeScreenshot(screenshotRequiredFlag, scenario);
		log.info("=> Accessed URL successfully");
		//Reporter.addScreenCaptureFromPath(screenshot.capture(driver, scenarioName));
	}

	@When("^i select product \"([^\"]*)\" from home$")
	public void i_select_product_from_home(String product) throws Throwable {
		wpAction.selectProduct(product, scenarioName,log);
	}

	@When("^add the selected product to cart \"([^\"]*)\"$")
	public void add_the_selected_product_to_cart(String notification) throws Throwable {
		wpAction.addSelectedProduct(scenarioName);
	}

	@Then("^go to checkout page , fill the required fields and place the order$")
	public void go_to_checkout_page_fill_the_required_fields_and_place_the_order(List<FeatureData> data) throws Throwable {
		wpAction.fillTheFields(data, scenarioName);
	}

	@Then("^order has been successfully placed \"([^\"]*)\"$")
	public void order_has_been_successfully_placed(String orderMsg) throws Throwable {
		wpAction.orderPlaced(orderMsg,scenarioName);
	}

}
