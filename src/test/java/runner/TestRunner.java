package runner;

import org.junit.Test;

import cucumber.api.cli.Main;
import utilities.PropertiesFileHelper;

public class TestRunner {
	private static final String FEATURES = "src/test/resources/features";
	private static final String PLUGIN_1 = "pretty";
	private static final String PLUGIN_2 = "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/ExecutionReport.html";

	private PropertiesFileHelper propertiesHelper;

	@Test
	public void cucumberOptions() throws Throwable {
		propertiesHelper = new PropertiesFileHelper("config.properties");

		String type = propertiesHelper.getPropertyValue("featureType").trim().toUpperCase();
		String tags = propertiesHelper.getPropertyValue("tags").trim();
		
		switch (type) {
		case "WEB":
			type = FEATURES + "/web/Swiggy.feature";
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

	}
}
