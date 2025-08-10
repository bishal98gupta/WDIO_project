export default class HomePage {
  get HomePageTitle() {
    return $("//android.widget.TextView[@text='WEBDRIVER']");
  }
  get homeButton() {
    return $("~Home");
  }
  get webviewButton() {
    return $("~Webview");
  }

  get loginButtonfromHomePage() {
    return $("~Login");
  }

  get FormButton() {
    return $("~Forms");
  }

  get swipeButton() {
    return $("~Swipe");
  }
  get dragButton() {
    return $("~Drag");
  }
}
