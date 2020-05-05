package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features= {"src/test/resources/features"},
		glue={"stepDefinitions"},
		tags= {"@SampleFeature_Toolsqa"},
		monochrome=true,
		//plugin  = {"pretty", "html:target/Destination","json:target/Destination/Cucumber.json","junit:target/Destination/Cucumber.xml"},
		plugin = {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:","io.qameta.allure.cucumber4jvm.AllureCucumber4Jvm","pretty", "html:target/Destination","json:target/Destination/Cucumber.json","junit:target/Destination/Cucumber.xml"}
		//plugin= {"io.qameta.allure.cucumber4jvm.AllureCucumber4Jvm","pretty", "html:target/Destination","json:target/Destination/Cucumber.json","junit:target/Destination/Cucumber.xml"}
		//plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:output/ExtentReport.html","io.qameta.allure.cucumber4jvm.AllureCucumber4Jvm","pretty", "html:target/Destination","json:target/Destination/Cucumber.json","junit:target/Destination/Cucumber.xml"}
		
		
		) 

public class Runner{

}