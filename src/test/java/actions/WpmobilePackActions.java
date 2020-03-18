package actions;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.vimalselvam.cucumber.listener.Reporter;

import pageObjects.DemoPageObjects;
import pageObjects.WpmobilePackPageObjects;
import utilities.GetScreenShot;

public class WpmobilePackActions {

	public int exact;
	WebDriver driver;
	WebDriverWait wait;
	WebElement element;
	DemoPageObjects demoPO;
	GetScreenShot screenshot;
	WpmobilePackPageObjects wpMobilePackPO;
	
	public WpmobilePackActions(WebDriver driver){
		
		this.driver=driver;
		wait=new WebDriverWait(driver, 60);
		screenshot = new GetScreenShot();
		demoPO=PageFactory.initElements(driver, DemoPageObjects.class);	
		wpMobilePackPO=PageFactory.initElements(driver, WpmobilePackPageObjects.class);	
	}
	
	public String getPrice(String item) throws IOException, Exception
	{
		
	    exact=homeitemsMethod(item);
		element=wpMobilePackPO.homeGrid.findElement(By.xpath("//div["+(exact)+"]/div[1]/div/div[2]/h3/div"));
		return element.getText();
	}
	
	public int homeitemsMethod(String item) {
		int count=0;
		List<WebElement> lweb=wpMobilePackPO.homeItems;
		System.out.println(lweb.size());
		for(int i=0;i<lweb.size();i++)
		{
			System.out.println(lweb.get(i).getText());
			if(lweb.get(i).getText().trim().equals(item.trim()))
			{
				count=i+2;
				break;
			}
		}
		System.out.println(count);
		return count;
	}
	
	public void shopClick(String item) {
		 exact=homeitemsMethod(item);
		 element=wpMobilePackPO.homeGrid.findElement(By.xpath("//div["+(exact)+"]/div[2]/a"));
		 element.click();
	}
	public void scroll(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true);", element);
		
	}
}
