package automationPractice.pages;

import automationPractice.Utils.Utils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class ProductPage extends  BasePage {


    public Utils myUtility=new Utils();
    public ProductPage(){

        PageFactory.initElements(driver, this);
    }

    // select item block
    @FindBy(xpath=".//*[@id='center_column']/ul/li/div/div[2]")
   private WebElement addProductToCartField;

   @FindBy(css=" .button.ajax_add_to_cart_button.btn.btn-default>span")
    private WebElement clickAddToCartField;
//layer cart display
    @FindBy(xpath=".//*[@id='layer_cart']/div[1]/div[1]/h2")
    private WebElement layerCartField;

    public void selectItem(String text)
    {

    if(addProductToCartField.getText().contains(text))
    {

    myUtility.moveTo(addProductToCartField);
    }
    }
    public void addItemToCart()

    {
       clickAddToCartField.click();
    }
    public boolean itemInYourCartMessage(String text)
{
    return (layerCartField.getText().contains(text));
}
}
