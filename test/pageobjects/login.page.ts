export default class LoginPage {
  get HomePageTitle() {
    return $("//android.widget.TextView[@text='WEBDRIVER']");
  }

  get loginbuttonfromHomePage() {
    return $("~Login");
  }
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

  async loginWithValidCredentials(email: string, password: string) {
    await this.loginbuttonfromHomePage.click();
    await this.userNamefield.setValue(email);
    await this.passwordfield.setValue(password);
    await this.loginButton.click();
  }

  async verifyLoginMessage() {
    await this.loginAlertHeader.waitForExist({ timeout: 5000 });
    await expect(this.loginAlertHeader).toBeExisting();
    await expect(this.loginAlertMessage).toHaveText("You are logged in!");
    await this.okButton.click();
  }

  async verifyErrorMessage() {
    await this.userNameFieldError.waitForExist({ timeout: 3000 });
    await expect(this.userNameFieldError).toBeExisting();
    await expect(this.passwordFieldError).toBeExisting();
  }
}

// import Page from './page';

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     public get inputUsername () {
//         return $('#username');
//     }

//     public get inputPassword () {
//         return $('#password');
//     }

//     public get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     public async login (username: string, password: string) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     public open () {
//         return super.open('login');
//     }
// }

// export default new LoginPage();
