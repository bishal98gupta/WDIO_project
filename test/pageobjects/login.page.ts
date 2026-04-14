import homePage from "./home.page";
import Allure from "@wdio/allure-reporter";

export default class LoginPage extends homePage {
  get userNamefield() {
    return $("~input-email");
  }
  get passwordfield() {
    return $("~input-password");
  }

  get loginButton() {
    return $(
      "//android.view.ViewGroup[@content-desc='button-LOGIN']/android.view.ViewGroup"
    );
  }

  get loginAlertHeader() {
    return $("id:android:id/alertTitle");
  }

  get loginAlertMessage() {
    return $("id:android:id/message");
  }

  get okButton() {
    return $("id:android:id/button1");
  }

  get userNameFieldError() {
    return $(
      'android=new UiSelector().text("Please enter a valid email address")'
    );
  }

  get passwordFieldError() {
    return $(
      'android=new UiSelector().text("Please enter at least 8 characters")'
    );
  }

  async loginWithCredentials(email: string, password: string) {
    Allure.addStep("Valid Login Test started");
    await this.loginButtonfromHomePage.click();
    await expect(this.userNamefield).toBeExisting();
    await this.userNamefield.setValue(email);
    await this.passwordfield.setValue(password);
    await this.loginButton.click();
    Allure.addStep("Login button clicked");
  }

  async verifyLoginMessage() {
    await this.loginAlertHeader.waitForExist({ timeout: 5000 });
    await expect(this.loginAlertHeader).toBeExisting();
    await expect(this.loginAlertMessage).toHaveText("You are logged in!");
    await this.okButton.click();
    Allure.addStep("Valid login Test completed");
  }

  async verifyErrorMessage() {
    await this.userNameFieldError.waitForExist({ timeout: 3000 });
    await expect(this.userNameFieldError).toBeExisting();
    await expect(this.passwordFieldError).toBeExisting();
    Allure.addStep("Invalid login Test completed");
  }
}