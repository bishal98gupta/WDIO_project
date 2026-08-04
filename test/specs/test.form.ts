import HomePage from "../../pageobjects/home.page";
import formPage from "../../pageobjects/form.page";

describe("Form Tests", () => {
  const homepage = new HomePage();
  it("Fill up form values", async () => {
    await homepage.FormButton.click();
    await formPage.fillFormData("hello there!");
  });
});
