import { keyboard, Key, sleep } from "@nut-tree-fork/nut-js";

while(true){
    await sleep(700)
    console.log("Searching...")
    await keyboard.type(Key.Enter)
    await sleep(300)
    await keyboard.type(Key.Enter)
    await sleep(1000)
    console.log("Car auction options...")
    await keyboard.type(Key.Y) //TODO - Fix not going into options
    await sleep(200)           //and intead opens the car view...
    console.log("Attempt purchase...")
    await keyboard.type(Key.Down)
    await sleep(25)
    await keyboard.type(Key.Enter)
    console.log("Attempted purchase...")
    await sleep(500)
    console.log("Leaving and starting over...")
    console.clear()
    await keyboard.type(Key.Escape)
}