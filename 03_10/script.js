/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Chair from "./chair.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const secondaryPack = new Backpack(
  "Secondary Backpack",
  20,
  "purple",
  3,
  25,
  25,
  true
);

const chair = new Chair(28, 24, true, "leather", "brown");

const smallChair = new Chair(12, 16, false, "wood", "white stain");

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("The chair value:", chair);
console.log("The smaller chair value:", smallChair);
