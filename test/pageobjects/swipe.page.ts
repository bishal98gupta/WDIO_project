import HomePage from "./home.page";
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
        // Swipe left on the first card
        await driver.swipe({
          direction: "left",
          scrollableElement: this.firstCard,
        });
        await driver.pause(3000);
      }
    }
    Allure.addStep("Swiping through cards completed");
  }

  async scrollDownvalidation() {
    Allure.addStep("Scrolling down to validate the end text");
    await this.foundMe.scrollIntoView();
    await expect(this.foundMe).toBeDisplayed();
    await expect(this.foundMe).toHaveText("You found me!!!");
    Allure.addStep("Scrolling down validation completed");
  }
}

export default new swipePage();
