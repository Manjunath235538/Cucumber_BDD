$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("toolsqa.feature");
formatter.feature({
  "line": 2,
  "name": "showcasing BDD framework using Toolsqa site",
  "description": "",
  "id": "showcasing-bdd-framework-using-toolsqa-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SampleFeature_Toolsqa"
    }
  ]
});
formatter.before({
  "duration": 10437689700,
  "status": "passed"
});
formatter.before({
  "duration": 1785800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "To access cucumber tutorial",
  "description": "",
  "id": "showcasing-bdd-framework-using-toolsqa-site;to-access-cucumber-tutorial",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Access_Cucumber_tutorial"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "i aunthorized user able to access toolsqa site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "im at home page and navigate to tutorials menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "navigate to \"Web Automation Tools\" menu followed by \"Cucumber Tutorial\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ToolsqaStepDefinition.i_aunthorized_user_able_to_access_toolsqa_site()"
});
formatter.result({
  "duration": 4023400700,
  "status": "passed"
});
formatter.match({
  "location": "ToolsqaStepDefinition.im_at_home_page_and_navigate_to_tutorials_menu()"
});
formatter.result({
  "duration": 628186500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web Automation Tools",
      "offset": 13
    },
    {
      "val": "Cucumber Tutorial",
      "offset": 53
    }
  ],
  "location": "ToolsqaStepDefinition.navigate_to_menu_followed_by(String,String)"
});
formatter.result({
  "duration": 3128460100,
  "status": "passed"
});
formatter.uri("wpmobile.feature");
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
  "duration": 1848000,
  "status": "passed"
});
formatter.before({
  "duration": 1855000,
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
        "560056",
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
  "duration": 4783639100,
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
  "duration": 1953608300,
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
  "duration": 5156692600,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "duration": 1936967700,
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
  "duration": 476026800,
  "status": "passed"
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
        "560056",
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
  "duration": 1955500,
  "status": "passed"
});
formatter.before({
  "duration": 3024300,
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
        "560056",
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
  "duration": 717247200,
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
  "duration": 602511700,
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
  "duration": 5355469000,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "duration": 1813849500,
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
  "duration": 522712000,
  "status": "passed"
});
formatter.before({
  "duration": 2475500,
  "status": "passed"
});
formatter.before({
  "duration": 1362400,
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
        "560056",
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
  "duration": 726411700,
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
  "duration": 654261900,
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
  "duration": 4551396100,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefinition.go_to_checkout_page_fill_the_required_fields_and_place_the_order(FeatureData\u003e)"
});
formatter.result({
  "duration": 1820988400,
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
  "duration": 500069300,
  "status": "passed"
});
});