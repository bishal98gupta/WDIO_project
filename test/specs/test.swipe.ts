import HomePage from "../../pageobjects/home.page";
import swipePage from "../../pageobjects/swipe.page";

describe("Swipe Tests", () => {
  const homepage = new HomePage();
  it("Horizontal left swipes", async () => {
    await homepage.swipeButton.click();
    await swipePage.swipeThroughCardsAndVerifyTexts([
      "FULLY OPEN SOURCE",
      "GREAT COMMUNITY",
      "JS.FOUNDATION",
      "SUPPORT VIDEOS",
      "EXTENDABLE",
    ]);
    await swipePage.scrollDownvalidation();
  });
});
