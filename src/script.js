//prettier-ignore
let food = [
  "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🧈", "🥞",
  "🧇", "🥓", "🥩", "🍗", "🍖", "🦴", "🌭", "🍔", "🍟", "🍕",
  "🫓", "🥪", "🥙", "🧆", "🌮", "🌯", "🫔", "🥗", "🥘", "🫕",
  "🥫", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🦪", "🍤",
  "🍙", "🍚", "🍘", "🍥", "🥠", "🥮", "🍢", "🍡", "🍧", "🍨",
  "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿",
  "🍩", "🍪", "🌰", "🥜"
];

let arena = document.getElementById("arena");
let fightBtn = document.getElementById("fight-btn");

fightBtn.addEventListener("click", function () {
  let foodOne = Math.floor(Math.random() * food.length);
  let foodTwo = Math.floor(Math.random() * food.length);

  arena.textContent = food[foodOne] + " vs " + food[foodTwo];
});
