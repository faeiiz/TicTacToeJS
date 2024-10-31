let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winnerLbl = document.querySelector("#winner");
let newGameBtn = document.querySelector("#new");

let counter = 0;
let turnO = true; //playerx, playery
const winningPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  counter = 0;
  turnO = true;
  enableBtns();
  winnerLbl.classList.add("hide");
  newGameBtn.classList.add("hide");
  boxes.forEach((box) => {
    box.classList.remove("show");
  });
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (turnO) {
      counter++;
      console.log(counter);
      //playerO turn
      box.innerText = "O";
      turnO = false;
    } else {
      counter++;
      console.log(counter);
      //PlayerX turn
      box.innerText = "X";
      turnO = true;
    }
    if (counter == 9) {
      winnerLbl.classList.remove("hide");
      newGameBtn.classList.remove("hide");
      winnerLbl.innerText = "Draw";
    }
    box.classList.add("show");
    box.disabled = true; //Disable the button after one click

    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winningPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "")
      if (pos1 === pos2 && pos2 === pos3) {
        newGameBtn.classList.remove("hide");
        winnerLbl.classList.remove("hide");
        winnerLbl.innerText = "Winner : " + pos1;
        disableBtns();
      }
  }
};

function disableBtns() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function enableBtns() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}
