import Allure from "@wdio/allure-reporter";

class dragPage {
  get dragendropText() {
    return $('android=new UiSelector().text("Drag and Drop")');
  }

  private sourceLocators = [
    '//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView',
    '//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView',
    '//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView',
    '//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView',
    '//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView',
    '//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView',
    '//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView',
    '//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView',
    '//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView',
  ];

  private targetLocators = [
    '//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup',
    '//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup',
    '//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup',
    '//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup',
    '//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup',
    '//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup',
    '//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup',
    '//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup',
    '//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup',
  ];

  async dragandDropElements() {
    await expect(this.dragendropText).toBeExisting();
    Allure.addStep("Drag and drop started");
    for (let i = 0; i < this.sourceLocators.length; i++) {
      const sourceElement = await $(this.sourceLocators[i]);
      const targetElement = await $(this.targetLocators[i]);
      await this.performdragAndDrop(sourceElement, targetElement);
    }

    Allure.addStep("Drag & drop completed");
    Allure.addAttachment(
      "puzzle screenshot",
      await browser.takeScreenshot(),
      "image/png"
    );
  }

  async performdragAndDrop(
    source: ChainablePromiseElement,
    targetElement: ChainablePromiseElement
  ) {
    const sourceLocation = await source.getLocation();
    const sourceSize = await source.getSize();
    const targetLocation = await targetElement.getLocation();
    const targetSize = await targetElement.getSize();

    const startX = sourceLocation.x + sourceSize.width / 2;
    const endX = targetLocation.x + targetSize.width / 2;
    const startY = sourceLocation.y + sourceSize.height / 2;
    const endY = targetLocation.y + targetSize.height / 2;

    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: startY },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 100 },
          { type: "pointerMove", duration: 300, x: endX, y: endY },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    await driver.pause(300);
  }

  async verifySuccessMessage(successtext: string) {
    const congratulationsImage = await $("android.widget.ImageView");
    const otherText = await $(
      '//android.widget.TextView[@text="You made it, click retry if you want to try it again."]'
    );
    const retryButton = await $(
      '//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup'
    );
    await congratulationsImage.waitForExist({ timeout: 10000 });
    await expect(otherText).toHaveText(successtext);
    await retryButton.click();
    await expect(this.dragendropText).toBeDisplayed();
    await driver.pause(1500);
  }
}
export default new dragPage();
