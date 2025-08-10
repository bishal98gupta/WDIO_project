import formPage from "../pageobjects/form.page";
import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import dragPage from "../pageobjects/swipe.page";

// describe("Login Tests", () => {
//   const loginPage = new LoginPage();

//   it("login with valid credentials", async () => {
//     await expect(loginPage.HomePageTitle).toHaveText("WEBDRIVER");
//     await loginPage.loginWithValidCredentials("test@test.com", "secret_sauce");
//     await loginPage.verifyLoginMessage();
//   });

//   it("Login with Invalid Credentials", async () => {
//     await loginPage.loginWithValidCredentials("hmgumyu56h", "secr");
//     await loginPage.verifyErrorMessage();
//   });
// });

// describe("Form Tests", () => {
//   const homepage = new HomePage();
//   it("Fill up form values", async () => {
//     await homepage.FormButton.click();
//     await formPage.fillFormData("hello there!");
//   });
// });

describe("Swipe Tests", () => {
  const homepage = new HomePage();
  it("Horizontal left swipes", async () => {
    await homepage.swipeButton.click();
    await dragPage.horizontalScrollToRight();
  });
});
