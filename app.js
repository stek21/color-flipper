const colors = ["black", "gray", "silver", "white", "fuchsia", "purple", "red", "maroon", "yellow", "lime", "green", "aqua", "teal", "blue", "navy", "red"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}