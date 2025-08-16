import formPage from "../pageobjects/form.page";
import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import swipePage from "../pageobjects/swipe.page";
import dragPage from "../pageobjects/drag.page";
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

// describe("Form Tests", () => {
//   const homepage = new HomePage();
//   it("Fill up form values", async () => {
//     await homepage.FormButton.click();
//     await formPage.fillFormData("hello there!");
//   });
// });

// describe("Swipe Tests", () => {
//   const homepage = new HomePage();
//   it("Horizontal left swipes", async () => {
//     await homepage.swipeButton.click();
//     await swipePage.swipeThroughCardsAndVerifyTexts([
//       "FULLY OPEN SOURCE",
//       "GREAT COMMUNITY",
//       "JS.FOUNDATION",
//       "SUPPORT VIDEOS",
//       "EXTENDABLE",
//     ]);
//     await swipePage.scrollDownvalidation();
//   });
// });

// describe("drag & drop Tests", () => {
//   const homepage = new HomePage();
//   it("drag & drop", async () => {
//     await homepage.dragButton.click();
//     await dragPage.dragAndDropElement();
//     await dragPage.verifySuccessMessage(
//       "You made it, click retry if you want to try it again."
//     );
//   });
// });

//let me tell you, i dont wan tto make any changes to my wdio file, since in my local, the apk, will be avialble at the same path. But only for the workflow run, i wan tot use that download apk link and pass it to the workflow during runtime from the GH 'Run workflow' UI
//bs://bc8c44ac69a9f0292ab942453817401ce4c4bbf4
