import HomePage from "./home.page";

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
        await driver.pause(1000);
      }
    }
  }

  async scrollDownvalidation() {
    await this.foundMe.scrollIntoView();
    await expect(this.foundMe).toBeDisplayed();
    await expect(this.foundMe).toHaveText("You found me!!!");
  }
}

export default new swipePage();
