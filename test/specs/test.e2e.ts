import LoginPage from "../pageobjects/login.page";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  it("login with valid credentials", async () => {
    await expect(loginPage.HomePageTitle).toHaveText("WEBDRIVER");
    await loginPage.loginWithValidCredentials("test@test.com", "secret_sauce");
    await loginPage.verifyLoginMessage();
  });

  it("Login with Invalid Credentials", async () => {
    await loginPage.loginWithValidCredentials("hmgumyu56h", "secr");
    await loginPage.verifyErrorMessage();
  });
});
