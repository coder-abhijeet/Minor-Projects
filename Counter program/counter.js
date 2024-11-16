let countLabel = document.getElementById("count_number");
let count = 0;

document.getElementById("increaseButton").onclick = function() {
    count++;
    countLabel.textContent = count;
}

document.getElementById("decreaseButton").onclick = function() {
        count--;
        countLabel.textContent = count;
}

document.getElementById("resetButton").onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
