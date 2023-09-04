let start = document.getElementById("start");
let container = document.getElementById("container");
let x = Math.floor(Math.random() * 100);
let messages = "";
let alertBox;

start.addEventListener("click", game);
function game() {
  document.body.style.backgroundImage = "url('res/img1.jpg')";
  container.remove();
  document.body.innerHTML =
    ' <div id="conatiner-one">' +
    '<div id="text-container">' +
    ' <input type="number" id="searchInput" name="query" placeholder="Write a number between 0 and 99"/>' +
    '<button type="button" id="submitButton">Submit</button>' +
    '<button type="button" id="resetButton">Reset</button>' +
    "</div>" +
    '<div id="alert-box">' +
    '<div class="alert alert-success" role="alert" id="alertBox">' +
    " Your Trials" +
    "</div>" +
    "</div>" +
    "</div>";

  let submitButton = document.getElementById("submitButton");
  let resetButton = document.getElementById("resetButton");
  let searchInput = document.getElementById("searchInput");
  alertBox = document.getElementById("alertBox");
  let trial = 0;

  submitButton.addEventListener("click", handleSubmit);

  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  });

  resetButton.addEventListener("click", function () {
    // Reload the page to return to the start
    location.reload();
  });

  function addMessage(message) {
    // Append the new message to the accumulated messages
    alertBox.innerHTML += `<p>${message}</p>`;
  }

  function handleSubmit() {
    let y = searchInput.value;
    if (y.includes(".")) {
      addMessage("Please enter a valid whole number between 0 and 99.");
      return;
    }
    y = parseInt(y);

    if (y < 0 || y > 99 || !Number.isInteger(y)) {
      addMessage("Please enter a valid whole number between 0 and 99.");
      return;
    }
    trial++;
    if (x < y) {
      addMessage(
        `${trial}. Your guessed number is ${y} and it is greater than my number.`
      );
    }
    if (x > y) {
      addMessage(
        `${trial}. Your guessed number is ${y} and it is smaller than my number.`
      );
    }
    if (x === y) {
      addMessage(
        `${trial}. Congratulations!!! You guessed ${x} in ${trial} trial(s).`
      );
    }
    searchInput.value = "";
  }
}
