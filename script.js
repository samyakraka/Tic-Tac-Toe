let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turno){              //Player o turn
            box.innerHTML = "O";
            turno = false; 
        }
        else{                   //Player x turn
            box.innerHTML = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
