var colors = ["red", "blue", "yellow"];
var button = document.getElementById("button");

button.addEventListener("click", () => {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
