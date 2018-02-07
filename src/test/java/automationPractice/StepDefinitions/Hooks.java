package automationPractice.StepDefinitions;

import automationPractice.Utils.BrowserFactory;
import automationPractice.pages.BasePage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends  BasePage {

    Scenario scenario;
    @Before
    public void setUp(){

       BrowserFactory.startBrowser();
       maximiseBrowser();
    }

    @After
    public void cleanUp(){
       // boolean condition= scenario.isFailed();
        //if(condition){
            // takeScreenShot();
        //}
        BrowserFactory.stopBrowser();
    }
}
