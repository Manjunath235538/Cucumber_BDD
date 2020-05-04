package helpers;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.util.Date;


public class SharedDriver {
	
	private static WebDriver REAL_DRIVER;
	private static boolean initialized = false;
	private static Logger log;
	Date date=new Date();
	
    static {
    	  
		Runtime.getRuntime().addShutdownHook(new Thread() {
			public void run() {
				try {
				  	REAL_DRIVER.close();
		            REAL_DRIVER.quit();
		            log.info("Driver is closed");
					
				} catch (Exception e) {
					log.error("Driver is closed in Exception , Driver Instance :" + REAL_DRIVER + "Ex. Message:"
							+ e.getMessage());
				}
			}
		});

    }

    public SharedDriver(String browser,Logger log) throws IOException {
    	this.log=log;
    	if(!initialized){

    		log.info("*********************Test Excecution Started on "+date+"************************");
    		log.info("Inside shared driver init.....");
    		REAL_DRIVER = BrowserSelect.setup(browser);
    		REAL_DRIVER.manage().deleteAllCookies();
        	REAL_DRIVER.manage().window().maximize();
    		initialized = true;
    		
    	}

    }
    
    public WebDriver getDriver(){    	
    	return REAL_DRIVER;
    }
    
}
