import { keyboard, Key, sleep } from "@nut-tree-fork/nut-js";

while (true) {
  await sleep(700);
  console.log("Starting Race Event...");
  await keyboard.type(Key.Enter);
  console.clear();
  console.log("Waiting for event start...");
  await sleep(5 * 1000);
  console.clear();
  console.log("Driving event...");
  await keyboard.pressKey(Key.W);
  await sleep(40 * 1000);
  await keyboard.releaseKey(Key.W);
  console.clear();
  console.log("Stopped driving event...");
  await sleep(2 * 1000);
  console.clear();
  console.log("Restarting Event...");
  await keyboard.type(Key.X);
  await sleep(1 * 1000);
  await keyboard.type(Key.Enter);
  console.clear();
  console.log("Waiting for start event screen...");
  await sleep(15 * 1000);
}
