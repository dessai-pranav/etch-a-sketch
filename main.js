document.addEventListener("DOMContentLoaded", function() {
    createBoard(32);
    getSize();
});

function createBoard(size) {
    let board = document.querySelector(".container");


    board.innerHTML = "";


    board.style.display = "grid";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {

        let div = document.createElement("div");

       div.addEventListener("mouseover", function (){
           div.style.backgroundColor = "black";

       })
        board.insertAdjacentElement("beforeend", div);

    }
}
function getSize(){
    let input = prompt("please enter  the number");
    let message = document.querySelector("#message")
    if(input === ""){
        getSize();
    }
    else if(input<0||input>100){
        alert("please enter within the range of 0-100");
        getSize();
    }
    else{
message.innerHTML = "you are ready to play"
    }
}