const input = document.querySelector(".password");
const copyButton = document.querySelector(".copyButton");
const genButton = document.querySelector(".genButton");

genButton.addEventListener("click", (event) => {
  event.preventDefault();

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const nums = "1234567890";
  const signs = "!@#$%&_";

  let result = "";

  for (let i = 0; i < 3; i++) {
    const randomSigns = signs[Math.floor(Math.random() * signs.length)];

    const randomNums = nums[Math.floor(Math.random() * nums.length)];

    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    result += randomLetter + randomNums + randomSigns;
  }
  input.value = result;
});

copyButton.addEventListener("click", (event) => {
  event.preventDefault();

  navigator.clipboard
    .writeText(input.value)
    .then(() => alert("Copied!"))
    .catch((err) => console.error("Failed to copy:", err));
});
