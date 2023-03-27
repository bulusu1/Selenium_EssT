import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;

public class Autocomplete {
    public static void main(String[] args) throws InterruptedException {

            System.setProperty("webdriver.chrome.driver", "C:\\Java_Test_Projects\\Ex_Files_Selenium_EssT\\src\\Webdriver\\chromedriver_111.0.5563.64.exe");

            Thread.sleep(2000);

        WebDriver driver = new ChromeDriver();

        driver.get("https://formy-project.herokuapp.com/autocomplete");
            WebElement autocomplete = driver.findElement(By.id("autocomplete"));
            autocomplete.sendKeys("9494 Carroll Canyon Road");
            Thread.sleep(2000);
            WebElement autocompleteResult = driver.findElement(By.className("pac-container"));
            Thread.sleep(2000);
            autocompleteResult.click();
            Thread.sleep(2000);

        driver.quit();
    }
}
