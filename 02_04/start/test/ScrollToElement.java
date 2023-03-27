package test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ScrollToElement {
    public static void main(String[] args) throws InterruptedException {

        System.setProperty("webdriver.chrome.driver", "C:\\Java_Test_Projects\\Ex_Files_Selenium_EssT\\src\\Webdriver\\chromedriver_111.0.5563.64.exe");

        WebDriver driver = new ChromeDriver();

        driver.get("https://formy-project.herokuapp.com/scroll");

        Actions actions = new Actions(driver);

        Thread.sleep(2000);
        WebElement name = driver.findElement(By.id("name"));
        actions.moveToElement(name);
        name.sendKeys("Prakash Bulusu");

        Thread.sleep(2000);
        WebElement date= driver.findElement(By.id("date"));
        date.sendKeys("01/01/2022");

        Thread.sleep(2000);

        driver.quit();
    }
}
