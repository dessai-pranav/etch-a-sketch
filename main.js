
let input = prompt("Please enter a number between 1 and 100");
let color ="black"

document.addEventListener("DOMContentLoaded", function () {

    getSize();

    const popupBtn = document.getElementById("popup");
    popupBtn.addEventListener("click", getSize);
});

function createBoard(size) {
    const board = document.querySelector(".container");

    board.innerHTML = "";
  board.style.display = "grid";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");

        div.style.border = "1px solid #ccc";
        div.style.width = "100%";
        div.style.aspectRatio = "1";
        div.style.backgroundColor = "white";


        div.addEventListener("mouseover", colorDiv)


        board.appendChild(div)


    }
}

function getSize() {

    let message = document.querySelector("#message");

    if (input === "") {
        getSize();
    } else if (input < 1 || input > 100) {
        alert("Please enter within the range of 1–100");
        getSize();
    } else {
        createBoard(input);
        message.innerHTML = "You're ready to play!";
    }
}
function colorDiv(){
if(color === 'random'){
this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}
else{
    this.style.backgroundColor = 'black'
}
}
function setColor(colorChoice){
     color = colorChoice;
}
function resetBoard(){
    createBoard(input);

}