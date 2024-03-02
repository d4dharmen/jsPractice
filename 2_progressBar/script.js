
const numbers = document.querySelectorAll(".num")
const nextButton = document.getElementById("nxt")
const previousButton = document.getElementById("prev")
let activeNumber = 0;
// console.log("onload activenumber " + activeNumber);

//on load condition
numbers[activeNumber].classList.add("active")
previousButton.disabled = "disabled"

function handleNext() {
    if (activeNumber < 2) {
        previousButton.disabled = "";
        activeNumber = activeNumber+1;
        numbers[activeNumber].classList.add("active")
        previousButton.classList.add("active")
        // console.log("next if activeNumber "+activeNumber);
        
    } else {
        activeNumber = 3;
        numbers[activeNumber].classList.add("active")
        nextButton.disabled = "disabled";
        nextButton.classList.remove("active")
        // console.log("next else activeNumber "+activeNumber);
    }
    
}
function handlePrevious() {
    numbers[activeNumber].classList.remove("active")
    activeNumber = activeNumber - 1;
    if (activeNumber <= 0) {
        previousButton.classList.remove("active")
        previousButton.disabled = "disabled"
        activeNumber = 0;
        nextButton.classList.add("active")
        nextButton.disabled = "";
        // console.log("previous if activeNumber "+activeNumber);
    } else {
        // console.log("previous else activeNumber "+activeNumber);
    }
}

nextButton.addEventListener("click", handleNext)
previousButton.addEventListener("click", handlePrevious)