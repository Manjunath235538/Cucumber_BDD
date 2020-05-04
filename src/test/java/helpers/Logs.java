package helpers;

import java.io.File;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class Logs {
	
	static String log4jConfPath =System.getProperty("user.dir")+File.separator+"log4j.properties";
	static Logger log=Logger.getLogger(Logs.class.getName());
	
	public static void info(String message)
	{
		PropertyConfigurator.configure(log4jConfPath);
		Log.info(message);
	}
	public static void startTestCase(String sTestCaseName){
		PropertyConfigurator.configure(log4jConfPath);
		Log.info("Started Test case Name: "+sTestCaseName);
	}


	public static void endTestCase(String sTestCaseName){
		Log.info("Ended Test Case");
	}


	public static void error(String message){
		PropertyConfigurator.configure(log4jConfPath);
		Log.error(message);
	}
}
