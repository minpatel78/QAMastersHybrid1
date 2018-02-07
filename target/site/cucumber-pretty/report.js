$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddToCart.feature");
formatter.feature({
  "line": 1,
  "name": "I want to add item to cart so i can  purchase the item",
  "description": "",
  "id": "i-want-to-add-item-to-cart-so-i-can--purchase-the-item",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10883928320,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnHomePage()"
});
formatter.result({
  "duration": 130077014,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#happy path scenario"
    }
  ],
  "line": 9,
  "name": "Add item to cart from search",
  "description": "",
  "id": "i-want-to-add-item-to-cart-so-i-can--purchase-the-item;add-item-to-cart-from-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@search"
    },
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I see search",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I type search item \"t-shirt\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select a product\"Faded Short Sleeve T-shirts\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select AddItemToCart",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStep.onSearchBox()"
});
formatter.result({
  "duration": 33780906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "t-shirt",
      "offset": 20
    }
  ],
  "location": "AddToCartStep.enterSearchItem(String)"
});
formatter.result({
  "duration": 95955627,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStep.submitSearchItem()"
});
formatter.result({
  "duration": 1498529707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Faded Short Sleeve T-shirts",
      "offset": 19
    }
  ],
  "location": "AddToCartStep.selectItemForCart(String)"
});
formatter.result({
  "duration": 131828053,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStep.selectAddItemToCart()"
});
formatter.result({
  "duration": 76020480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 22
    }
  ],
  "location": "AddToCartStep.seeMessage(String)"
});
formatter.result({
  "duration": 2044163840,
  "status": "passed"
});
formatter.after({
  "duration": 806324480,
  "status": "passed"
});
formatter.uri("Checkout.feature");
formatter.feature({
  "line": 1,
  "name": "I want to add item to cart and  purchase item",
  "description": "",
  "id": "i-want-to-add-item-to-cart-and--purchase-item",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11645365760,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enter email as \"mineshautomation@gmail.com\" and password as \"automation@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User selects SignIn",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnHomePage()"
});
formatter.result({
  "duration": 6207574,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.selctSignInLink()"
});
formatter.result({
  "duration": 1755330133,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnLoginpage()"
});
formatter.result({
  "duration": 79576320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mineshautomation@gmail.com",
      "offset": 21
    },
    {
      "val": "automation@123",
      "offset": 66
    }
  ],
  "location": "LoginSteps.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 287044693,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.selectSignIn()"
});
formatter.result({
  "duration": 1117303466,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#happy path scenario"
    }
  ],
  "line": 14,
  "name": "Add product to cart",
  "description": "",
  "id": "i-want-to-add-item-to-cart-and--purchase-item;add-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@checkout"
    },
    {
      "line": 13,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I see search",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I type search item \"t-shirt\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select search",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select a product\"Faded Short Sleeve T-shirts\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select AddItemToCart",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see \"Faded Short Sleeve T-shirts\" in my Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStep.onSearchBox()"
});
formatter.result({
  "duration": 49677653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "t-shirt",
      "offset": 20
    }
  ],
  "location": "AddToCartStep.enterSearchItem(String)"
});
formatter.result({
  "duration": 80421547,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStep.submitSearchItem()"
});
formatter.result({
  "duration": 1469239040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Faded Short Sleeve T-shirts",
      "offset": 19
    }
  ],
  "location": "AddToCartStep.selectItemForCart(String)"
});
formatter.result({
  "duration": 113063680,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStep.selectAddItemToCart()"
});
formatter.result({
  "duration": 82941866,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.proceedToCheckout()"
});
formatter.result({
  "duration": 4335419306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Faded Short Sleeve T-shirts",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.seeProductInMyCart(String)"
});
formatter.result({
  "duration": 94242560,
  "status": "passed"
});
formatter.after({
  "duration": 867071573,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "User login on Automation practice website",
  "description": "As a user\r\nI want to see the login page\r\nSo that I can login successfully",
  "id": "user-login-on-automation-practice-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 12128924160,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnHomePage()"
});
formatter.result({
  "duration": 7554987,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User can able to login successfully with valid credentials",
  "description": "",
  "id": "user-login-on-automation-practice-website;user-can-able-to-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@validLogin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should be on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enter email as \"mineshautomation@gmail.com\" and password as \"automation@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User selects SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should see his name as \"m patel\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selctSignInLink()"
});
formatter.result({
  "duration": 1297024854,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnLoginpage()"
});
formatter.result({
  "duration": 73154560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mineshautomation@gmail.com",
      "offset": 21
    },
    {
      "val": "automation@123",
      "offset": 66
    }
  ],
  "location": "LoginSteps.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 280803414,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.selectSignIn()"
});
formatter.result({
  "duration": 1073363200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.isUserLoggedIn()"
});
formatter.result({
  "duration": 68691626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "m patel",
      "offset": 29
    }
  ],
  "location": "LoginSteps.user_should_see_his_name_as_something(String)"
});
formatter.result({
  "duration": 45847893,
  "status": "passed"
});
formatter.after({
  "duration": 801086294,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "User should see feedback message, when he provides invalid credentials",
  "description": "",
  "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 18,
      "name": "@feedbackMessage"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter email as \"\u003cUsername\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User selects SignIn",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "#    Then User should see feedback message as \"\u003cMessage\u003e\""
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Message"
      ],
      "line": 26,
      "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials;;1"
    },
    {
      "cells": [
        "invalid",
        "dfgfdg",
        "Invalid email address."
      ],
      "line": 27,
      "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials;;2"
    },
    {
      "cells": [
        "sdfdsf@dfsdfds.dsfdsf",
        "sdfdsf",
        "Authentication failed."
      ],
      "line": 28,
      "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials;;3"
    },
    {
      "cells": [
        "",
        "",
        "An email address required."
      ],
      "line": 29,
      "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9478661974,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnHomePage()"
});
formatter.result({
  "duration": 8536747,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should see feedback message, when he provides invalid credentials",
  "description": "",
  "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@feedbackMessage"
    },
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter email as \"invalid\" and password as \"dfgfdg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User selects SignIn",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selctSignInLink()"
});
formatter.result({
  "duration": 1318243414,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnLoginpage()"
});
formatter.result({
  "duration": 80544853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 21
    },
    {
      "val": "dfgfdg",
      "offset": 47
    }
  ],
  "location": "LoginSteps.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 235150507,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.selectSignIn()"
});
formatter.result({
  "duration": 764635733,
  "status": "passed"
});
formatter.after({
  "duration": 876239360,
  "status": "passed"
});
formatter.before({
  "duration": 9496746667,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnHomePage()"
});
formatter.result({
  "duration": 8287573,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should see feedback message, when he provides invalid credentials",
  "description": "",
  "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@feedbackMessage"
    },
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter email as \"sdfdsf@dfsdfds.dsfdsf\" and password as \"sdfdsf\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User selects SignIn",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selctSignInLink()"
});
formatter.result({
  "duration": 1292922453,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnLoginpage()"
});
formatter.result({
  "duration": 61989546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfdsf@dfsdfds.dsfdsf",
      "offset": 21
    },
    {
      "val": "sdfdsf",
      "offset": 61
    }
  ],
  "location": "LoginSteps.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 239597226,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.selectSignIn()"
});
formatter.result({
  "duration": 789001386,
  "status": "passed"
});
formatter.after({
  "duration": 881778773,
  "status": "passed"
});
formatter.before({
  "duration": 8394946987,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnHomePage()"
});
formatter.result({
  "duration": 7719680,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should see feedback message, when he provides invalid credentials",
  "description": "",
  "id": "user-login-on-automation-practice-website;user-should-see-feedback-message,-when-he-provides-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@feedbackMessage"
    },
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter email as \"\" and password as \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User selects SignIn",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selctSignInLink()"
});
formatter.result({
  "duration": 1222507094,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnLoginpage()"
});
formatter.result({
  "duration": 74213973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "LoginSteps.enterLoginCredentials(String,String)"
});
formatter.result({
  "duration": 129864106,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.selectSignIn()"
});
formatter.result({
  "duration": 755137280,
  "status": "passed"
});
formatter.after({
  "duration": 864796160,
  "status": "passed"
});
formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Regiser feature for www.automationpractice.com site",
  "description": "As a customer\r\nI want to register successfuly for shopping",
  "id": "regiser-feature-for-www.automationpractice.com-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#happy path scenario"
    }
  ],
  "line": 9,
  "name": "Registered successfully with mandatory field",
  "description": "",
  "id": "regiser-feature-for-www.automationpractice.com-site;registered-successfully-with-mandatory-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@register"
    },
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be on the regitration page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enters email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select create account button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I complete personnel information \"\u003ctitle\u003e\"and\"\u003cfirstname\u003e\"and\"\u003csurname\u003e\"and\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I complete address details \"\u003caddress1\u003e\"and\"\u003ccity\u003e\"and\"\u003cstate\u003e\"and \"\u003cpostcode\u003e\"and\"\u003ccountry\u003e\"and\"\u003cmobile\u003e\"and\"\u003calias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select register",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should login and see message as \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "regiser-feature-for-www.automationpractice.com-site;registered-successfully-with-mandatory-field;",
  "rows": [
    {
      "cells": [
        "email",
        "title",
        "firstname",
        "surname",
        "password",
        "address1",
        "city",
        "state",
        "postcode",
        "country",
        "mobile",
        "alias",
        "message"
      ],
      "line": 19,
      "id": "regiser-feature-for-www.automationpractice.com-site;registered-successfully-with-mandatory-field;;1"
    },
    {
      "cells": [
        "minesh77@malinator.com",
        "Mr",
        "Steve",
        "White",
        "abcde",
        "high street",
        "chatham",
        "Alaska",
        "99501",
        "United States",
        "12345678",
        "newaccount",
        "Welcome"
      ],
      "line": 20,
      "id": "regiser-feature-for-www.automationpractice.com-site;registered-successfully-with-mandatory-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9175652693,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnHomePage()"
});
formatter.result({
  "duration": 8887894,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Registered successfully with mandatory field",
  "description": "",
  "id": "regiser-feature-for-www.automationpractice.com-site;registered-successfully-with-mandatory-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be on the regitration page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enters email as \"minesh77@malinator.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select create account button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I complete personnel information \"Mr\"and\"Steve\"and\"White\"and\"abcde\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I complete address details \"high street\"and\"chatham\"and\"Alaska\"and \"99501\"and\"United States\"and\"12345678\"and\"newaccount\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select register",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should login and see message as \"Welcome\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.selctSignInLink()"
});
formatter.result({
  "duration": 1291741440,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.verifyUserOnRegistrationPage()"
});
formatter.result({
  "duration": 77524053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "minesh77@malinator.com",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.enterUserEmaiId(String)"
});
formatter.result({
  "duration": 197261653,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.clickOnCreateAnAccount()"
});
formatter.result({
  "duration": 105013760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 34
    },
    {
      "val": "Steve",
      "offset": 41
    },
    {
      "val": "White",
      "offset": 51
    },
    {
      "val": "abcde",
      "offset": 61
    }
  ],
  "location": "RegistrationSteps.enterPersonnelInformation(String,String,String,String)"
});
formatter.result({
  "duration": 1851973973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high street",
      "offset": 28
    },
    {
      "val": "chatham",
      "offset": 44
    },
    {
      "val": "Alaska",
      "offset": 56
    },
    {
      "val": "99501",
      "offset": 68
    },
    {
      "val": "United States",
      "offset": 78
    },
    {
      "val": "12345678",
      "offset": 96
    },
    {
      "val": "newaccount",
      "offset": 109
    }
  ],
  "location": "RegistrationSteps.enterAddressDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1853168213,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.clickOnRegister()"
});
formatter.result({
  "duration": 1199933866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 35
    }
  ],
  "location": "RegistrationSteps.seeWelcomeLoginMessage(String)"
});
formatter.result({
  "duration": 70955520,
  "status": "passed"
});
formatter.after({
  "duration": 2815175680,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#Unhappy path scenario"
    }
  ],
  "line": 25,
  "name": "Registration un-successfull with no data",
  "description": "",
  "id": "regiser-feature-for-www.automationpractice.com-site;registration-un-successfull-with-no-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@register1"
    },
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should be on the regitration page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I enters email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select create account button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I complete personnel information \"\u003ctitle\u003e\"and\"\u003cfirstname\u003e\"and\"\u003csurname\u003e\"and\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I complete address details \"\u003caddress1\u003e\"and\"\u003ccity\u003e\"and\"\u003cstate\u003e\"and \"\u003cpostcode\u003e\"and\"\u003ccountry\u003e\"and\"\u003cmobile\u003e\"and\"\u003calias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select register",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see error message as \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "regiser-feature-for-www.automationpractice.com-site;registration-un-successfull-with-no-data;",
  "rows": [
    {
      "cells": [
        "email",
        "title",
        "firstname",
        "surname",
        "password",
        "address1",
        "city",
        "state",
        "postcode",
        "country",
        "mobile",
        "alias",
        "message"
      ],
      "line": 36,
      "id": "regiser-feature-for-www.automationpractice.com-site;registration-un-successfull-with-no-data;;1"
    },
    {
      "cells": [
        "minesh66@malinator.com",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "errors"
      ],
      "line": 37,
      "id": "regiser-feature-for-www.automationpractice.com-site;registration-un-successfull-with-no-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8404236800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.verifyUserIsOnHomePage()"
});
formatter.result({
  "duration": 8124160,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Registration un-successfull with no data",
  "description": "",
  "id": "regiser-feature-for-www.automationpractice.com-site;registration-un-successfull-with-no-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    },
    {
      "line": 24,
      "name": "@register1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User selects SignIn link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should be on the regitration page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I enters email as \"minesh66@malinator.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select create account button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I complete personnel information \"\"and\"\"and\"\"and\"\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I complete address details \"\"and\"\"and\"\"and \"\"and\"\"and\"\"and\"\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select register",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see error message as \"\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.selctSignInLink()"
});
formatter.result({
  "duration": 1370200747,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.verifyUserOnRegistrationPage()"
});
formatter.result({
  "duration": 52928853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "minesh66@malinator.com",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.enterUserEmaiId(String)"
});
formatter.result({
  "duration": 154005333,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.clickOnCreateAnAccount()"
});
formatter.result({
  "duration": 104709120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    },
    {
      "val": "",
      "offset": 39
    },
    {
      "val": "",
      "offset": 44
    },
    {
      "val": "",
      "offset": 49
    }
  ],
  "location": "RegistrationSteps.enterPersonnelInformation(String,String,String,String)"
});
formatter.result({
  "duration": 1560301227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 28
    },
    {
      "val": "",
      "offset": 33
    },
    {
      "val": "",
      "offset": 38
    },
    {
      "val": "",
      "offset": 44
    },
    {
      "val": "",
      "offset": 49
    },
    {
      "val": "",
      "offset": 54
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "RegistrationSteps.enterAddressDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1595726934,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.clickOnRegister()"
});
formatter.result({
  "duration": 994853973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "RegistrationSteps.seeRegistrationErrorMessage(String)"
});
formatter.result({
  "duration": 38980693,
  "status": "passed"
});
formatter.after({
  "duration": 887320747,
  "status": "passed"
});
});