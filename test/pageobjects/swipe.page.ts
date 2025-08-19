import HomePage from "./home.page";
// import { swipeLeft } from "../Utils/Common";
import Allure from "@wdio/allure-reporter";
import type { ChainablePromiseElement } from "webdriverio";

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
    //for fetching all textViews inside each cards
    // const textViews = await this.firstCard.$$("//android.widget.TextView");
    // for (const tv of textViews) {
    //   const cardText = await tv.getText();
    //   console.log("card text:", cardText);
    // }
    Allure.addStep("Swiping through cards started");
    for (const expectedText of expectedTexts) {
      const cardText = await this.firstCard
        .$("(//android.widget.TextView)[2]")
        .getText();
      await expect(cardText).toMatch(expectedText);
      if (await this.secondCard.isDisplayed()) {
        await this.swipeLeft(this.firstCard);
      }
    }
    Allure.addStep("Swiping through cards completed");
  }

  // Swipe left on the first card not using swipeLeft function
  // await driver.swipe({
  //   direction: "left",
  //   scrollableElement: this.firstCard,
  // });
  //     await driver.pause(3000);
  //    }
  // }

  async scrollDownvalidation() {
    Allure.addStep("Scrolling down to validate the end text");
    await this.foundMe.scrollIntoView();
    await expect(this.foundMe).toBeDisplayed();
    await expect(this.foundMe).toHaveText("You found me!!!");
    Allure.addStep("Scrolling down validation completed");
  }
  async swipeLeft(element: ChainablePromiseElement) {
    // ✅ Swipe left using W3C Actions API
    const size = (await element.getSize()) as any;
    const location = (await element.getLocation()) as any;
    const startX = location.x + size.width * 0.8;
    const endX = location.x + size.width * 0.2;
    const CenterY = location.y + size.height / 2;

    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: CenterY },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 500 },
          { type: "pointerMove", duration: 600, x: endX, y: CenterY },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    await driver.pause(1500);
    // Clear actions to reset state (important on BS)
    // await driver.releaseActions();
  }
}
export default new swipePage();
