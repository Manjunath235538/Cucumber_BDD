package utilities;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

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
	public byte[] saveScreenshot() {
	    return ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
	}
}
