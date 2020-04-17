package runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.Test;

import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.cli.Main;
import utilities.PropertiesFileHelper;

public class TestRunner {
	private static final String FEATURES = "src/test/resources/features";
	private static final String PLUGIN_1 = "pretty";
	private static final String PLUGIN_2 = "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/ExecutionReport.html";

	private PropertiesFileHelper propertiesHelper;

//	@AfterClass
//	 public static void writeExtentReport() throws IOException {
//	    // Reporter.loadXMLConfig(new File(System.getProperty("user.dir")+"src//test//resources//files//extent-config.xml"));
//	     Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
//	     Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
//	     Reporter.setSystemInfo("Machine", "Windows 10  "+"64 Bit");
//	     Reporter.setSystemInfo("Selenium", "3.7.0");
//	     Reporter.setSystemInfo("Maven", "3.6.1");
//	     Reporter.setSystemInfo("Java Version", "1.8.0_151");
//	 }
	
	@Test
	public void cucumberOptions() throws Throwable {
		propertiesHelper = new PropertiesFileHelper("config.properties");

		String type = propertiesHelper.getPropertyValue("featureType").trim().toUpperCase();
		String tags = propertiesHelper.getPropertyValue("tags").trim();
		System.out.println("Tags value"+tags);
		switch (type) {
		case "WEB":
			type = FEATURES + "/web";
			break;
		case "API":
			type = FEATURES + "/api";
			break;
		case "MOB":
			type = FEATURES + "/mob/Something.feature";
			break;

		default:
			type = FEATURES;
			break;
		}

		Main.main(new String[] { "-g", "stepDefinitions", "-p", PLUGIN_1, "-p", PLUGIN_2, type,"-t",tags,"-m"});
		
		//Main.main(new String[] { "-g", "stepDefinitions", "-p", PLUGIN_1, "-p", PLUGIN_2, type,"-t","-m"});
		
	}
}
