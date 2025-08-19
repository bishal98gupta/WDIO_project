import type { ChainablePromiseElement } from "webdriverio";

// export async swipeLeftnew(element: ChainablePromiseElement) {
//     // ✅ Swipe left using W3C Actions API
//     const size = (await element.getSize()) as any;
//     const location = (await element.getLocation()) as any;
//     const startX = location.x + size.width * 0.8;
//     const endX = location.x + size.width * 0.2;
//     const CenterY = location.y + size.height / 2;

//     await driver.performActions([
//       {
//         type: "pointer",
//         id: "finger1",
//         parameters: { pointerType: "touch" },
//         actions: [
//           { type: "pointerMove", duration: 0, x: startX, y: CenterY },
//           { type: "pointerDown", button: 0 },
//           { type: "pause", duration: 500 },
//           { type: "pointerMove", duration: 600, x: endX, y: CenterY },
//           { type: "pointerUp", button: 0 },
//         ],
//       },
//     ]);
//     await driver.pause(1500);
//     // Clear actions to reset state (important on BS)
//     await driver.releaseActions();
//   }
