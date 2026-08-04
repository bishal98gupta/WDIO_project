import HomePage from "../../pageobjects/home.page";
import dragPage from "../../pageobjects/drag.page";

describe("drag & drop Tests", () => {
  const homepage = new HomePage();
  it("drag & drop", async () => {
    await homepage.dragButton.click();
    await dragPage.dragandDropElements();
    await dragPage.verifySuccessMessage(
      "You made it, click retry if you want to try it again.",
    );
  });
});
