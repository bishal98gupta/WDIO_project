/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
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
