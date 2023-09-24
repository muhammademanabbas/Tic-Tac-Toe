"use strict";
let ALL_CELL = document.querySelectorAll(".cell");
let statuss = document.querySelector("#status");
let newgame = document.querySelector("#newgame");

let X = "X";
let O = "O";
let whichPlayer = undefined;
let array = ["", "", "", "", "", "", "", "", "", ""]



ALL_CELL.forEach(function (v, index) {
  v.addEventListener("click", function (e) {
    if (!v.innerHTML) {
      if (!whichPlayer) {
        v.innerHTML = X;
        whichPlayer = "player2";
        console.log("clicked", e.target.id, index);
        array[e.target.id] = X;
        console.log(array[0]);
        statuss.innerHTML = "Player's 2 Turn";
        checkWinner();
      } else if (whichPlayer === "player2") {
        v.innerHTML = O;
        whichPlayer = "player1";
        console.log("clicked", e.target.id,index);
        array[e.target.id] = O;
        console.log(array);
        statuss.innerHTML = "Player's 1 Turn";
        checkWinner();
      } else {
        v.innerHTML = X;
        whichPlayer = "player2";
        console.log("clicked", e.target.id,index);
        array[e.target.id] = X;
        console.log(array);
        statuss.innerHTML = "Player's 2 Turn";
        checkWinner();
      }
    }
  });
});
function check_X_or_O(val) {
    if (val === X) {
        statuss.innerHTML = `Congratulations Player One X is Winner`;
      } else {
        statuss.innerHTML = `Congratulations Player Two O is Winner`;
    }
}
function for_null(val, val2, val3) {
  if (val == "" && val2 == "" && val3 == "") {
    return true;
  } else {
    return false;
  }
}
function check_same_text(val1, val2, val3) {
  if (val1 === val2 && val2 === val3) {
    if (!for_null(val1, val2, val3)) {
      return true;
    }
  } else {
    return false;
  }
}
function checkWinner() {
  if (check_same_text(array[1], array[2], array[3])) {
    check_X_or_O(array[1]);
  } else if (check_same_text(array[4], array[5], array[6])) {
    check_X_or_O(array[4]);
  } else if (check_same_text(array[7], array[8], array[9])) {
    check_X_or_O(array[7]);
  } else if (check_same_text(array[1], array[4], array[7])) {
    check_X_or_O(array[1]);
  } else if (check_same_text(array[2], array[5], array[8])) {
    check_X_or_O(array[2]);
  } else if (check_same_text(array[3], array[6], array[9])) {
    check_X_or_O(array[3]);
  } else if (check_same_text(array[1], array[5], array[9])) {
    check_X_or_O(array[1]);
  } else if (check_same_text(array[3], array[5], array[7])) {
    check_X_or_O(array[3]);
  }
}

function  resetGame  ()  {
  array = ["", "", "", "", "", "", "", "", "", ""]
  statuss.innerHTML  =  `Player's 1 Turn`
  whichPlayer  =  undefined
  ALL_CELL.forEach(function (v) {
  v.innerHTML = null
  })
}
newgame.addEventListener("click", function (e) {
  array = ["", "", "", "", "", "", "", "", "", ""]
  statuss.innerHTML  =  `Player's 1 Turn`
  whichPlayer  =  undefined
  ALL_CELL.forEach(function (v) {
  v.innerHTML = null
  })
})