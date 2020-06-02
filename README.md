Allure installation:
1. Download the latest version as zip archive from Maven Central.
i.e: 2.13.3/                                           2020-04-21 14:06         
2. Navigate to bin directory.
3. Add allure to system PATH.
4. Execute allure --version in console to make sure that allure is now available:
$ allure --version
2.13.3

5. Each major version of Cucumber JVM requires a particular version of Allure Cucumber JVM adapter.
6. Cucumber JVM 4.x - allure-cucumber4-jvm  
Maven:
Simply add allure-cucumber4-jvm plugin as a dependency to your project
pom.xml
<properties>
    <aspectj.version>1.8.10</aspectj.version>
</properties>

<dependencies>
    <dependency>
        <groupId>io.qameta.allure</groupId>
        <artifactId>allure-cucumber4-jvm</artifactId>
        <version>LATEST_VERSION</version>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>2.20</version>
            <configuration>
                <argLine>
                    -javaagent:"${settings.localRepository}/org/aspectj/aspectjweaver/${aspectj.version}/aspectjweaver-${aspectj.version}.jar"
                    
                </argLine>
            </configuration>
            <dependencies>
                <dependency>
                    <groupId>org.aspectj</groupId>
                    <artifactId>aspectjweaver</artifactId>
                    <version>${aspectj.version}</version>
                </dependency>
            </dependencies>
        </plugin>
    </plugins>
</build>

Add plugin under cucumber options which is 
plugin= {"io.qameta.allure.cucumber4jvm.AllureCucumber4Jvm"}
Execution:
We can execute test cases from two ways 
1.	From testRunner class
2.	From mvn clean test

Configuration
Location of allure-results directory, and patterns for @TmsLink and @Issue links can be set by placing allure.properties file with following properties to resources directory: src/test/resources
allure.properties
allure.results.directory=target/allure-results
allure.link.issue.pattern=https://example.org/browse/{}
allure.link.tms.pattern=https://example.org/browse/{}

To generate the report from existing Allure results you can use the following command:
$ allure serve <directory-with-results>

Installation of Ngrok.exe and How to host Allure report :
1.Download ngrok for windows from official website of ngrok https://ngrok.com/download
2. Once its downloaded , keep it under some folder
3. Navigate to ngrok.exe folder -> open cmd -> enter Ngrok.exe http localhostnumber
4. Get the url from forwarding 
