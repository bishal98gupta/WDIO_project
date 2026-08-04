import LoginPage from "../../pageobjects/login.page";

describe("Login Tests", () => {
  const loginPage = new LoginPage();
  
  it("login with valid credentials", async () => {
    await expect(loginPage.HomePageTitle).toHaveText("WEBDRIVER");
    await loginPage.loginWithCredentials("test@test.com", "secret_sauce");
    await loginPage.verifyLoginMessage();
  });

  it("Login with Invalid Credentials", async () => {
    await loginPage.loginWithCredentials("hmgumyu56h", "secr");
    await loginPage.verifyErrorMessage();
  });
});
