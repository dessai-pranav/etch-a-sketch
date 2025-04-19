
let input = prompt("Please enter a number between 1 and 30");
let color ="black"
let click = false;

document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById("popup");
    popupBtn.addEventListener("click", getSize)

    document.querySelector("body").addEventListener("click", function (e) {
        if (e.target.tagName !== "BUTTON") {
            click = !click;
            let draw = document.getElementById("draw");
            if (draw) {
                draw.innerHTML = click ? "Now you can draw" : "Now you can't draw";
            }
        }
    });
createBoard(input);

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

        div.style.border = "1px solid white";
        div.style.width = "100%";
        div.style.aspectRatio = "1";
        div.style.backgroundColor = "transparent";


        div.addEventListener("mouseover", colorDiv)


        board.appendChild(div)


    }
}

function getSize() {

    let message = document.querySelector("#message");

    if (input === "") {
        getSize();
    } else if (input < 1 || input > 30) {
        alert("Please enter within the range of 1–30");
        getSize();
    } else {
        createBoard(input);
        message.innerHTML = "You're ready to play!";
    }

}
function colorDiv() {

if(click) {
    if (color === 'random') {
        this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    } else {
        this.style.backgroundColor = 'black'
    }

}
}
function setColor(colorChoice){
     color = colorChoice;
}
function resetBoard(){
    createBoard(input);

}