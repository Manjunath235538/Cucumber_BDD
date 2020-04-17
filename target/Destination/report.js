$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/toolsqa.feature");
formatter.feature({
  "name": "showcasing BDD framework using Toolsqa site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SampleFeature_Toolsqa"
    }
  ]
});
formatter.scenario({
  "name": "To access cucumber tutorial",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SampleFeature_Toolsqa"
    },
    {
      "name": "@Access_Cucumber_tutorial"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i aunthorized user able to access toolsqa site",
  "keyword": "Given "
});
formatter.match({
  "location": "ToolsqaStepDefinition.i_aunthorized_user_able_to_access_toolsqa_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "im at home page and navigate to tutorials menu",
  "keyword": "When "
});
formatter.match({
  "location": "ToolsqaStepDefinition.im_at_home_page_and_navigate_to_tutorials_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"Frameworks \u0026 Libraries\" menu followed by \"Cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolsqaStepDefinition.navigate_to_menu_followed_by(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify allure reporting is  Working or not",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SampleFeature_Toolsqa"
    },
    {
      "name": "@sample"
    },
    {
      "name": "@severity\u003dblocker"
    },
    {
      "name": "@issue\u003d666"
    },
    {
      "name": "@tmsLink\u003d123"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a valid user",
  "keyword": "Given "
});
formatter.match({
  "location": "ToolsqaStepDefinition.i_have_a_valid_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login to app",
  "keyword": "When "
});
formatter.match({
  "location": "ToolsqaStepDefinition.i_login_to_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage screen should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolsqaStepDefinition.homepage_screen_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/wpmobile.feature");
formatter.feature({
  "name": "showcasing BDD framework using wpmobile ecommerce site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SampleFeature_wpmobile"
    }
  ]
});
formatter.scenario({
  "name": "To place an order from wpmobilePack",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SampleFeature_wpmobile"
    },
    {
      "name": "@PlaceOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i have privileges to access wpmobilePack site",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoStepDefinition.i_have_privileges_to_access_wpmobilePack_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select product \"Patient Ninja\" from home",
  "keyword": "When "
});
formatter.match({
  "location": "DemoStepDefinition.i_select_product_from_home(String)"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: gherkin/formatter/Reporter\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(Unknown Source)\r\n\tat java.security.SecureClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.access$100(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat com.vimalselvam.cucumber.listener.Reporter.getCurrentStep(Reporter.java:162)\r\n\tat com.vimalselvam.cucumber.listener.Reporter.addScreenCaptureFromPath(Reporter.java:94)\r\n\tat actions.WpmobilePackActions.selectProduct(WpmobilePackActions.java:118)\r\n\tat stepDefinitions.DemoStepDefinition.i_select_product_from_home(DemoStepDefinition.java:72)\r\n\tat ✽.i select product \"Patient Ninja\" from home(file:src/test/resources/features/wpmobile.feature:7)\r\nCaused by: java.lang.ClassNotFoundException: gherkin.formatter.Reporter\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(Unknown Source)\r\n\tat java.security.SecureClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.access$100(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat com.vimalselvam.cucumber.listener.Reporter.getCurrentStep(Reporter.java:162)\r\n\tat com.vimalselvam.cucumber.listener.Reporter.addScreenCaptureFromPath(Reporter.java:94)\r\n\tat actions.WpmobilePackActions.selectProduct(WpmobilePackActions.java:118)\r\n\tat stepDefinitions.DemoStepDefinition.i_select_product_from_home(DemoStepDefinition.java:72)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "add the selected product to cart \"Patient Ninja was added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoStepDefinition.add_the_selected_product_to_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "go to checkout page , fill the required fields and place the order",
  "rows": [
    {
      "cells": [
        "itemName",
        "firstName",
        "lastName",
        "companyName",
        "country",
        "address1",
        "address2",
        "city",
        "state",
        "zip",
        "phoneNumber",
        "email"
      ]
    },
    {
      "cells": [
        "Patient Ninja",
        "Handy",
        "David",
        "HP",
        "United States (US)",
        "street 1",
        "street 2",
        "ohio",
        "Missouri",
        "43210",
        "987654321",
        "mail@gmail.com"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "order has been successfully placed \"Order received\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.order_has_been_successfully_placed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.write("Failed test scenario");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To place an order from wpmobilePack for MultipleTimes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PlaceOrder_MultipleTimes"
    }
  ]
});
formatter.step({
  "name": "i have privileges to access wpmobilePack site",
  "keyword": "Given "
});
formatter.step({
  "name": "i select product \"\u003citemName\u003e\" from home",
  "keyword": "When "
});
formatter.step({
  "name": "add the selected product to cart \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "go to checkout page , fill the required fields and place the order",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "itemName",
        "firstName",
        "lastName",
        "companyName",
        "country",
        "address1",
        "address2",
        "city",
        "state",
        "zip",
        "phoneNumber",
        "email"
      ]
    },
    {
      "cells": [
        "Patient Ninja",
        "Handy",
        "David",
        "HP",
        "United States (US)",
        "street 1",
        "street 2",
        "ohio",
        "Missouri",
        "43210",
        "987654321",
        "mail@gmail.com"
      ]
    }
  ]
});
formatter.step({
  "name": "order has been successfully placed \"Order received\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemName",
        "message"
      ]
    },
    {
      "cells": [
        "Happy Ninja",
        "Happy Ninja was added to your shopping cart"
      ]
    },
    {
      "cells": [
        "Premium Quality",
        "Premium Quality was added to your shopping cart"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To place an order from wpmobilePack for MultipleTimes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SampleFeature_wpmobile"
    },
    {
      "name": "@PlaceOrder_MultipleTimes"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i have privileges to access wpmobilePack site",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoStepDefinition.i_have_privileges_to_access_wpmobilePack_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select product \"Happy Ninja\" from home",
  "keyword": "When "
});
formatter.match({
  "location": "DemoStepDefinition.i_select_product_from_home(String)"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: com/vimalselvam/cucumber/listener/ExtentCucumberFormatter\r\n\tat com.vimalselvam.cucumber.listener.Reporter.getCurrentStep(Reporter.java:162)\r\n\tat com.vimalselvam.cucumber.listener.Reporter.addScreenCaptureFromPath(Reporter.java:94)\r\n\tat actions.WpmobilePackActions.selectProduct(WpmobilePackActions.java:118)\r\n\tat stepDefinitions.DemoStepDefinition.i_select_product_from_home(DemoStepDefinition.java:72)\r\n\tat ✽.i select product \"Happy Ninja\" from home(file:src/test/resources/features/wpmobile.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "add the selected product to cart \"Happy Ninja was added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoStepDefinition.add_the_selected_product_to_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "go to checkout page , fill the required fields and place the order",
  "rows": [
    {
      "cells": [
        "itemName",
        "firstName",
        "lastName",
        "companyName",
        "country",
        "address1",
        "address2",
        "city",
        "state",
        "zip",
        "phoneNumber",
        "email"
      ]
    },
    {
      "cells": [
        "Patient Ninja",
        "Handy",
        "David",
        "HP",
        "United States (US)",
        "street 1",
        "street 2",
        "ohio",
        "Missouri",
        "43210",
        "987654321",
        "mail@gmail.com"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "order has been successfully placed \"Order received\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.order_has_been_successfully_placed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.write("Failed test scenario");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To place an order from wpmobilePack for MultipleTimes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SampleFeature_wpmobile"
    },
    {
      "name": "@PlaceOrder_MultipleTimes"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i have privileges to access wpmobilePack site",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoStepDefinition.i_have_privileges_to_access_wpmobilePack_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select product \"Premium Quality\" from home",
  "keyword": "When "
});
formatter.match({
  "location": "DemoStepDefinition.i_select_product_from_home(String)"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: com/vimalselvam/cucumber/listener/ExtentCucumberFormatter\r\n\tat com.vimalselvam.cucumber.listener.Reporter.getCurrentStep(Reporter.java:162)\r\n\tat com.vimalselvam.cucumber.listener.Reporter.addScreenCaptureFromPath(Reporter.java:94)\r\n\tat actions.WpmobilePackActions.selectProduct(WpmobilePackActions.java:118)\r\n\tat stepDefinitions.DemoStepDefinition.i_select_product_from_home(DemoStepDefinition.java:72)\r\n\tat ✽.i select product \"Premium Quality\" from home(file:src/test/resources/features/wpmobile.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "add the selected product to cart \"Premium Quality was added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoStepDefinition.add_the_selected_product_to_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "go to checkout page , fill the required fields and place the order",
  "rows": [
    {
      "cells": [
        "itemName",
        "firstName",
        "lastName",
        "companyName",
        "country",
        "address1",
        "address2",
        "city",
        "state",
        "zip",
        "phoneNumber",
        "email"
      ]
    },
    {
      "cells": [
        "Patient Ninja",
        "Handy",
        "David",
        "HP",
        "United States (US)",
        "street 1",
        "street 2",
        "ohio",
        "Missouri",
        "43210",
        "987654321",
        "mail@gmail.com"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "order has been successfully placed \"Order received\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.order_has_been_successfully_placed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.write("Failed test scenario");
formatter.after({
  "status": "passed"
});
});