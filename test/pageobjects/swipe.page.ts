import HomePage from "./home.page";
// import { ChainablePromiseElement } from "webdriverio";
import { swipe, scrollUntilVisible } from "../Utils/Common";
import Allure from "@wdio/allure-reporter";

class swipePage extends HomePage {
  get firstCard() {
    return $('(//android.view.ViewGroup[@content-desc="card"])[1]');
  }
  get secondCard() {
    return $('(//android.view.ViewGroup[@content-desc="card"])[2]');
  }
  get foundMe() {
    return $('android=new UiSelector().text("You found me!!!")');
  }

  async swipeThroughCardsAndVerifyTexts(expectedTexts: string[]) {
    Allure.addStep("Swiping through cards started");
    for (const expectedText of expectedTexts) {
      const cardText = await this.firstCard
        .$("(//android.widget.TextView)[2]")
        .getText();
      await expect(cardText).toMatch(expectedText);
      if (await this.secondCard.isDisplayed()) {
        await swipe("left", this.firstCard);
      }
    }
    Allure.addStep("Swiping through cards completed");
  }

  async scrollDownvalidation() {
    Allure.addStep("Scrolling down to validate the end text");
    await scrollUntilVisible(this.foundMe, "up", 10);
    await expect(this.foundMe).toBeDisplayed();
    await expect(this.foundMe).toHaveText("You found me!!!");
    Allure.addStep("Scrolling down validation completed");
  }
}

export default new swipePage();
