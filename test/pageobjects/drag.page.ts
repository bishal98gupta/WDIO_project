import Allure from "@wdio/allure-reporter";

class dragPage {
  get dragendropText() {
    return $('android=new UiSelector().text("Drag and Drop")');
  }

  async dragAndDropElement() {
    //-------------------- Source elements to be dragged---------------------

    const sourceElement1 = await $(
      '//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView'
    );

    const sourceElement2 = await $(
      '//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView'
    );
    const sourceElement3 = await $(
      '//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView'
    );
    const sourceElement4 = await $(
      '//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView'
    );

    const sourceElement5 = await $(
      '//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView'
    );
    const sourceElement6 = await $(
      '//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView'
    );
    const sourceElement7 = await $(
      '//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView'
    );

    const sourceElement8 = await $(
      '//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView'
    );
    const sourceElement9 = await $(
      '//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView'
    );

    //-------------------- Target elements where the source elements will be dropped--------------------

    const targetElement1 = await $(
      '//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup'
    );
    const targetElement2 = await $(
      '//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup'
    );
    const targetElement3 = await $(
      '//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup'
    );
    const targetElement4 = await $(
      '//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup'
    );
    const targetElement5 = await $(
      '//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup'
    );
    const targetElement6 = await $(
      '//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup'
    );
    const targetElement7 = await $(
      '//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup'
    );
    const targetElement8 = await $(
      '//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup'
    );
    const targetElement9 = await $(
      '//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup'
    );

    await expect(this.dragendropText).toBeExisting();
    Allure.addStep("Drag and drop started");
    await sourceElement1.dragAndDrop(targetElement1);
    await sourceElement2.dragAndDrop(targetElement2);
    await sourceElement3.dragAndDrop(targetElement3);
    await sourceElement4.dragAndDrop(targetElement4);
    await sourceElement5.dragAndDrop(targetElement5);
    await sourceElement6.dragAndDrop(targetElement6);
    await sourceElement7.dragAndDrop(targetElement7);
    await sourceElement8.dragAndDrop(targetElement8);
    await sourceElement9.dragAndDrop(targetElement9);
    Allure.addStep("Drag and drop completed");
    Allure.addAttachment(
      "D&D screenshot",
      await browser.takeScreenshot(),
      "image/png"
    );
  }

  async verifySuccessMessage(successtext: string) {
    Allure.addStep("Verifying success message");
    const congratulationsImage = await $("android.widget.ImageView");
    const otherText = await $(
      '//android.widget.TextView[@text="You made it, click retry if you want to try it again."]'
    );
    const retryButton = await $(
      '//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup'
    );
    await congratulationsImage.waitForExist({ timeout: 10000 });
    await expect(otherText).toHaveText(successtext);
    Allure.addStep("Success message verified");
    Allure.addStep("Clicking retry button");
    await retryButton.click();
    await expect(this.dragendropText).toBeDisplayed();
    Allure.addStep("Retry button clicked");
    await driver.pause(1500);
  }
}

export default new dragPage();
