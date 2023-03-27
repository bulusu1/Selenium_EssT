package test;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;

public class TestSample {

    public static void main(String[] args) throws InterruptedException {

        // Set the property for webdriver.chrome.driver to be the location to your local download of chromedriver
        System.setProperty("webdriver.chrome.driver", "C:\\Java_Test_Projects\\Ex_Files_Selenium_EssT\\src\\Webdriver\\chromedriver_111.0.5563.64.exe");

        // Create new instance of ChromeDriver
        WebDriver driver = new ChromeDriver();

        // And now use this to visit Google
        driver.get("http://www.google.com");

           Thread.sleep(2000);

        // Find the text input element by its name
        WebElement element = driver.findElement(By.name("q"));

        // Enter something to search for
        element.sendKeys("Cheese!");

           Thread.sleep(2000);

        // Now submit the form
        element.submit();

           Thread.sleep(2000);

        //Close the browser
        driver.quit();

}

}


