const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const numContainer = document.getElementById("num");

let counter = 0;
plusButton.addEventListener("click", () => {
    counter++;
    updateDisplay(counter);
});

minusButton.addEventListener("click", () => {
    counter--;
    updateDisplay(counter);
});
resetButton.addEventListener("click", () => {
    counter = 0;
    updateDisplay(counter);
});

// helper functions
function updateDisplay(value) {
    numContainer.innerHTML = value;
}
