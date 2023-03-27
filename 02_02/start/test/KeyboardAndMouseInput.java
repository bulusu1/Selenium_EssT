package test;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;

public class KeyboardAndMouseInput {
    public static void main(String[] args) throws InterruptedException {

        System.setProperty("webdriver.chrome.driver", "C:\\Java_Test_Projects\\Ex_Files_Selenium_EssT\\src\\Webdriver\\chromedriver_111.0.5563.64.exe");

        WebDriver driver = new ChromeDriver();

        driver.get("https://formy-project.herokuapp.com/keypress");

            Thread.sleep(2000);

       WebElement name = driver.findElement(By.id("name"));
       name.click();
       name.sendKeys("Meaghan Lewis");

       WebElement button = driver.findElement(By.id("button"));
       button.click();

            Thread.sleep(2000);

       driver.quit();

    }
}
