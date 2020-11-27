export default function randomPick(obj) {
  return Math.floor(Math.random() * Object.keys(obj).length);
}

