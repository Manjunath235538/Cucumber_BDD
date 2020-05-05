package utilities;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import helpers.Log;
import io.cucumber.core.api.Scenario;
import io.qameta.allure.Attachment;

public class AllureReports {
 
	private WebDriver driver;
	
	public AllureReports(WebDriver driver) {
		this.driver=driver;
	}
	
//	@Attachment
//	public String performedActions(ActionSequence actionSequence) {
//	    return actionSequence.toString();
//	}

	@Attachment(value = "Page screenshot", type = "image/png")
	public void saveScreenshot() {
	     ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
	}
	
	public byte[] getScreenshot() {
		 byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		 return screenshot;
	}
	
	public void takeScreenshot(String screenshotRequiredFlag, Scenario scenario) {
		if(screenshotRequiredFlag.equals("YES"))
		{
			 scenario.embed(getScreenshot(), "image/png");
		}
		else{
			Log.info("No screenshots taken");
		}
	}
}
