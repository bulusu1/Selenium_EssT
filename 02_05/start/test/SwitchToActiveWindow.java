package test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SwitchToActiveWindow {
    public static void main(String[] args) throws InterruptedException {

        System.setProperty("webdriver.chrome.driver", "C:\\Java_Test_Projects\\Ex_Files_Selenium_EssT\\src\\Webdriver\\chromedriver_111.0.5563.64.exe");

        WebDriver driver = new ChromeDriver();

        driver.get("https://formy-project.herokuapp.com/switch-window");

        WebElement newTabButton = driver.findElement(By.id("new-tab-button"));
        newTabButton.click();
        String originalHandle = driver.getWindowHandle();

        Thread.sleep(2000);

        for(String handle1: driver.getWindowHandles()){
            driver.switchTo().window(handle1);
        }

        Thread.sleep(5000);

        driver.switchTo().window(originalHandle);

        Thread.sleep(2000);


        driver.quit();
    }
}
