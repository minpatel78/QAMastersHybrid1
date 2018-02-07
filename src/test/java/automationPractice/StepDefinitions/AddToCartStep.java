package automationPractice.StepDefinitions;

import automationPractice.Utils.Utils;
import automationPractice.pages.HomePage;
import automationPractice.pages.ProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class AddToCartStep {

    public HomePage homePage;
    public Utils myUtility;
    public ProductPage productPage;

    @Given("^I see search$")
    public void onSearchBox()
    {
        homePage=new HomePage();
        Assert.assertTrue(homePage.searchBox());
    }
    @And("^I type search item \"([^\"]*)\"$")
    public void enterSearchItem(String item)  {
        homePage.setSearchItem(item);

    }
    @And("^I select search$")
    public void submitSearchItem()
    {
        homePage.submitSearch();

    }

    @And("^I select a product\"([^\"]*)\"$")
    public void selectItemForCart(String product)  {
            productPage=new ProductPage();
             productPage.selectItem(product);
    }


    @When("^I select AddItemToCart$")
    public void selectAddItemToCart()
    {
        productPage.addItemToCart();

    }
    @Then("^I should see message \"([^\"]*)\"$")
    public void seeMessage(String Message) throws InterruptedException
    {
        Thread.sleep(2000L);
        Assert.assertTrue(productPage.itemInYourCartMessage(Message));

    }
}
