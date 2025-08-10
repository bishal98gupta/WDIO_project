import HomePage from "./home.page";

class swipePage extends HomePage {
  get firstCard() {
    return $('(//android.view.ViewGroup[@content-desc="card"])[1]');
  }
  get secondCard() {
    return $('(//android.view.ViewGroup[@content-desc="card"])[2]');
  }

  async horizontalScrollToRight() {
    await expect(this.firstCard).toBeExisting();
    while (await this.secondCard.isDisplayed()) {
      await driver.swipe({
        direction: "left",
        scrollableElement: this.firstCard,
      });
      await driver.pause(2500);
    }
  }
}
export default new swipePage();
