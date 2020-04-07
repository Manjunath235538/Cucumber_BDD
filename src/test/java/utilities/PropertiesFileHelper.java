package utilities;

import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class PropertiesFileHelper {
	FileReader reader;
	Properties properties;

	public PropertiesFileHelper(String filename) throws IOException {
		reader = new FileReader(filename);
		properties = new Properties();
		properties.load(reader);
	}

	public String getPropertyValue(String key) {
		return properties.getProperty(key);
	}
}
