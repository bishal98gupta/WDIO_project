import { ChainablePromiseElement } from "webdriverio";

export async function swipe(
  direction: "left" | "right" | "up" | "down",
  element?: ChainablePromiseElement
) {
  let startX: number, endX: number, startY: number, endY: number;

  switch (direction) {
    case "left": {
      if (!element) throw new Error("Element is not defined for swipe action");
      const size = await element.getSize();
      const location = await element.getLocation();
      startX = location.x + size.width * 0.8;
      endX = location.x + size.width * 0.2;
      startY = endY = location.y + size.height / 2;
      break;
    }
    case "right": {
      if (!element) throw new Error("Element is not defined for swipe action");
      const size = await element.getSize();
      const location = await element.getLocation();
      startX = location.x + size.width * 0.2;
      endX = location.x + size.width * 0.8;
      startY = endY = location.y + size.height / 2;
      break;
    }
    case "up": {
      const size = await driver.getWindowSize();
      startX = endX = size.width / 2;
      startY = size.height * 0.5;
      endY = size.height * 0.1;
      break;
    }
    case "down": {
      const size = await driver.getWindowSize();
      startX = endX = size.width / 2;
      startY = size.height * 0.3;
      endY = size.height * 0.7;
      break;
    }
  }

  await driver.performActions([
    {
      type: "pointer",
      id: "finger1",
      parameters: { pointerType: "touch" },
      actions: [
        { type: "pointerMove", duration: 0, x: startX, y: startY },
        { type: "pointerDown", button: 0 },
        { type: "pause", duration: 300 },
        { type: "pointerMove", duration: 600, x: endX, y: endY },
        { type: "pointerUp", button: 0 },
      ],
    },
  ]);

  await driver.pause(800);
}

export async function scrollUntilVisible(
  element: ChainablePromiseElement,
  direction: "up" | "down",
  maxSwipes: number = 10
) {
  let isVisible = false;
  for (let i = 0; i < maxSwipes; i++) {
    try {
      if (await element.isDisplayed()) {
        isVisible = true;
        console.log(`Element found after ${i + 1} swipes`);
        break;
      }
    } catch (error) {}
    await swipe(direction);
  }
  if (!isVisible) {
    throw new Error(`Element not found after ${maxSwipes} swipes`);
  }
}
