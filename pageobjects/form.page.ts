import HomePage from "./home.page";
import Allure from "@wdio/allure-reporter";

class FormPage extends HomePage {
  get inputField() {
    return $("~text-input");
  }
  get inputTextResultField() {
    return $("~input-text-result");
  }
  get radioButton() {
    return $("~switch");
  }
  get radioButtonMessage() {
    return $("~switch-text");
  }

  get dropdownField() {
    return $("//android.widget.EditText[@resource-id='text_input']");
  }

  get dropdownOptions() {
    return $("id:com.wdiodemoapp:id/select_dialog_listview");
  }

  get secondOption() {
    return $('android=new UiSelector().text("Appium is awesome")');
  }

  get activeButton() {
    return $(
      'android=new UiSelector().className("android.view.ViewGroup").instance(17)'
    );
  }
  get activePopupMessageText() {
    return $("//android.widget.TextView[@resource-id='android:id/message']");
  }

  get activePopupOKButton() {
    return $('android=new UiSelector().resourceId("android:id/button1")');
  }

  get inactiveButton() {
    return $(
      'android=new UiSelector().className("android.view.ViewGroup").instance(19)'
    );
  }

  async fillFormData(inputValue: string) {
    await this.inputField.waitForExist({ timeout: 3000 });
    Allure.addStep("Form filling started");
    await this.inputField.setValue(inputValue);
    await expect(this.inputTextResultField).toBeExisting();
    await expect(this.inputTextResultField).toHaveText(inputValue);
    await expect(this.radioButtonMessage).toHaveText(
      "Click to turn the switch ON"
    );
    await this.radioButton.click();
    await expect(this.radioButtonMessage).toHaveText(
      "Click to turn the switch OFF"
    );
    await this.dropdownField.click();
    await expect(this.dropdownOptions).toBeDisplayed();
    await this.secondOption.click();
    await expect(this.dropdownOptions).not.toBeDisplayed();
    await expect(this.dropdownField).toHaveText("Appium is awesome");
    await this.activeButton.click();
    await expect(this.activePopupMessageText).toBeExisting();
    await expect(this.activePopupMessageText).toHaveText(
      "This button is active"
    );
    await this.activePopupOKButton.click();
    await expect(this.inactiveButton).toBeDisplayed();
    Allure.addStep("Form filling completed");
  }
}

export default new FormPage();
