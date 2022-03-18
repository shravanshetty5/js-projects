const countDiv = document.getElementById("count");
const resetDiv = document.querySelector(".reset");
const decreaseDiv = document.querySelector(".decrease");
const increaseDiv = document.querySelector(".increase");

let countVal = 0;
//set initial value
setCountValue();

resetDiv.addEventListener("click", () => {
    countVal =0;
    setCountValue();

});
decreaseDiv.addEventListener("click", () => {
    countVal--;
    setCountValue();

});
increaseDiv.addEventListener("click", () => {
    countVal++;
    setCountValue();
});

function setCountValue() {
    countDiv.textContent = countVal;
    if (countVal > 0) {
        countDiv.style.color = "green";
    } else if (countVal < 0) {
        countDiv.style.color = "red";
    } else {
        countDiv.style.color = "#222";
    }
}