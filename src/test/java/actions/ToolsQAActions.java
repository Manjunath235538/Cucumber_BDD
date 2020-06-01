package actions;

import java.io.IOException;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.core.api.Scenario;
import pageObjects.ToolsQAPageObjects;
import utilities.GetScreenShot;

public class ToolsQAActions {

	WebDriver driver;
	WebDriverWait wait;
	ToolsQAPageObjects demoPO;
	GetScreenShot screenshot;
	private Logger log;
	
	public ToolsQAActions(WebDriver driver,Logger log){
		
		this.driver=driver;
		this.log=log;
		wait=new WebDriverWait(driver, 60);
		screenshot = new GetScreenShot();
		demoPO=PageFactory.initElements(driver, ToolsQAPageObjects.class);	
	}
	
	public void clickL1Menu(String l1menu,String l2menu,String scenarioName) throws IOException, Exception
	{
		System.out.println(l1menu);
		System.out.println(l2menu);
		int count=0;
		List<WebElement> lweb=demoPO.tutorialSubList;
		System.out.println(lweb.size());
		for(int i=0;i<lweb.size();i++)
		{
			System.out.println(lweb.get(i).getText());
			if(lweb.get(i).getText().trim().equals(l1menu.trim()))
			{
				count=i+1;
				break;
			}
		}
		System.out.println(count);
		Actions act=new Actions(driver);
		act.moveToElement(driver.findElement(By.xpath("//nav[@class='navigation']/ul/li[2]/ul/li["+(count)+"]"))).build().perform();
	   // Reporter.addScreenCaptureFromPath(screenshot.capture(driver, scenarioName));
		clickL2Menu(count, l2menu);
	}
	
	public void clickL2Menu(int count, String l2select) {
		List<WebElement> l2list=driver.findElements(By.xpath("//nav[@class='navigation']/ul/li[2]/ul/li["+(count)+"]/ul/li/a/span/span"));
		System.out.println(l2list.size());
		for(int i=0;i<l2list.size();i++)
		{
			System.out.println(l2list.get(i).getText());
			if(l2list.get(i).getText().trim().equals(l2select.trim()))
			{
				l2list.get(i).click();
				break;
			}
		}	
	}
	public void captureSS(Scenario scenario) {
		 byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		 scenario.embed(screenshot, "image/png");
	}
}
