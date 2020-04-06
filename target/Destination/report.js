$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("wpmobile.feature");
formatter.feature({
  "line": 2,
  "name": "showcasing BDD framework using wpmobile ecommerce site",
  "description": "",
  "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SampleFeature_wpmobile"
    }
  ]
});
formatter.before({
  "duration": 10305323500,
  "status": "passed"
});
formatter.before({
  "duration": 3882000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "To place an order from wpmobilePack",
  "description": "",
  "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site;to-place-an-order-from-wpmobilepack",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@PlaceOrder"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "i have privileges to access wpmobilePack site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i select product \"Patient Ninja\" from home",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "add the selected product to cart \"Patient Ninja was added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
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
      ],
      "line": 10
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
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "order has been successfully placed \"Order received\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.i_have_privileges_to_access_wpmobilePack_site()"
});
formatter.result({
  "duration": 9829616900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient Ninja",
      "offset": 18
    }
  ],
  "location": "DemoStepDefinition.i_select_product_from_home(String)"
});
formatter.result({
  "duration": 2752550900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patient Ninja was added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "DemoStepDefinition.add_the_selected_product_to_cart(String)"
});
formatter.result({
  "duration": 7610390400,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "duration": 2772024100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order received",
      "offset": 36
    }
  ],
  "location": "DemoStepDefinition.order_has_been_successfully_placed(String)"
});
formatter.result({
  "duration": 569860100,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat actions.WpmobilePackActions.orderPlaced(WpmobilePackActions.java:128)\r\n\tat stepDefinitions.DemoStepDefinition.order_has_been_successfully_placed(DemoStepDefinition.java:85)\r\n\tat ✽.Then order has been successfully placed \"Order received\"(wpmobile.feature:12)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "To place an order from wpmobilePack for MultipleTimes",
  "description": "",
  "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site;to-place-an-order-from-wpmobilepack-for-multipletimes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@PlaceOrder_MultipleTimes"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "i have privileges to access wpmobilePack site",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "i select product \"\u003citemName\u003e\" from home",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "add the selected product to cart \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
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
      ],
      "line": 20
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
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "order has been successfully placed \"Order received\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site;to-place-an-order-from-wpmobilepack-for-multipletimes;",
  "rows": [
    {
      "cells": [
        "itemName",
        "message"
      ],
      "line": 25,
      "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site;to-place-an-order-from-wpmobilepack-for-multipletimes;;1"
    },
    {
      "cells": [
        "Happy Ninja",
        "Happy Ninja was added to your shopping cart"
      ],
      "line": 26,
      "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site;to-place-an-order-from-wpmobilepack-for-multipletimes;;2"
    },
    {
      "cells": [
        "Premium Quality",
        "Premium Quality was added to your shopping cart"
      ],
      "line": 27,
      "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site;to-place-an-order-from-wpmobilepack-for-multipletimes;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3910300,
  "status": "passed"
});
formatter.before({
  "duration": 3974500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To place an order from wpmobilePack for MultipleTimes",
  "description": "",
  "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site;to-place-an-order-from-wpmobilepack-for-multipletimes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SampleFeature_wpmobile"
    },
    {
      "line": 14,
      "name": "@PlaceOrder_MultipleTimes"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "i have privileges to access wpmobilePack site",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "i select product \"Happy Ninja\" from home",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "add the selected product to cart \"Happy Ninja was added to your shopping cart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
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
      ],
      "line": 20
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
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "order has been successfully placed \"Order received\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.i_have_privileges_to_access_wpmobilePack_site()"
});
formatter.result({
  "duration": 759103400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy Ninja",
      "offset": 18
    }
  ],
  "location": "DemoStepDefinition.i_select_product_from_home(String)"
});
formatter.result({
  "duration": 1685578400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy Ninja was added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "DemoStepDefinition.add_the_selected_product_to_cart(String)"
});
formatter.result({
  "duration": 4052519900,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "duration": 2688426300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order received",
      "offset": 36
    }
  ],
  "location": "DemoStepDefinition.order_has_been_successfully_placed(String)"
});
formatter.result({
  "duration": 659061000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat actions.WpmobilePackActions.orderPlaced(WpmobilePackActions.java:128)\r\n\tat stepDefinitions.DemoStepDefinition.order_has_been_successfully_placed(DemoStepDefinition.java:85)\r\n\tat ✽.Then order has been successfully placed \"Order received\"(wpmobile.feature:22)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3167200,
  "status": "passed"
});
formatter.before({
  "duration": 3245000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To place an order from wpmobilePack for MultipleTimes",
  "description": "",
  "id": "showcasing-bdd-framework-using-wpmobile-ecommerce-site;to-place-an-order-from-wpmobilepack-for-multipletimes;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SampleFeature_wpmobile"
    },
    {
      "line": 14,
      "name": "@PlaceOrder_MultipleTimes"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "i have privileges to access wpmobilePack site",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "i select product \"Premium Quality\" from home",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "add the selected product to cart \"Premium Quality was added to your shopping cart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
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
      ],
      "line": 20
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
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "order has been successfully placed \"Order received\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoStepDefinition.i_have_privileges_to_access_wpmobilePack_site()"
});
formatter.result({
  "duration": 757945500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Premium Quality",
      "offset": 18
    }
  ],
  "location": "DemoStepDefinition.i_select_product_from_home(String)"
});
formatter.result({
  "duration": 1852721100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Premium Quality was added to your shopping cart",
      "offset": 34
    }
  ],
  "location": "DemoStepDefinition.add_the_selected_product_to_cart(String)"
});
formatter.result({
  "duration": 4344253800,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "duration": 2667738900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order received",
      "offset": 36
    }
  ],
  "location": "DemoStepDefinition.order_has_been_successfully_placed(String)"
});
formatter.result({
  "duration": 571474300,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat actions.WpmobilePackActions.orderPlaced(WpmobilePackActions.java:128)\r\n\tat stepDefinitions.DemoStepDefinition.order_has_been_successfully_placed(DemoStepDefinition.java:85)\r\n\tat ✽.Then order has been successfully placed \"Order received\"(wpmobile.feature:22)\r\n",
  "status": "failed"
});
});