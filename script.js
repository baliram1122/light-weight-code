let box = document.getElementById("container");
let disp1 = document.getElementById("display1");
let disp2 = document.getElementById("display2");
let disp3 = document.getElementById("display3");
let disp4 = document.getElementById("display4");
let disp5 = document.getElementById("display5");
let disp6 = document.getElementById("display6");
let disp7 = document.getElementById("display7");
let disp8 = document.getElementById("display8");
let disp9 = document.getElementById("display9");

let winPopup = document.querySelector(".win-popup");

let assignBox = document.querySelector(".player-assignment");



let player1 = true;
let player2 = false;

let player1Win = false;
let player2Win = false;



let player1Name = prompt("Enter player1 name");
let player2Name = prompt("Enter player2 name");

assignBox.textContent = `${player1Name}'s (O) Turn`;

box.addEventListener("click", (e) => {
    let block = e.target;
    assignBox.textContent = `${player1Name}'s (O) Turn`;
    if (player1 == true && player2 == false) {
        assignBox.innerText = `${player2Name}'s (X) Turn`;
        block.innerText = "O";
        player1 = false;
    } else {
        block.innerText = "X";
        player1 = true;
    }
    checkTriple()


    function checkTriple() {
        // check player1 triple
        if (((disp1.innerText == "O") && (disp2.innerText == "O") && (disp3.innerText == "O")) ||
            ((disp4.innerText == "O") && (disp5.innerText == "O") && (disp6.innerText == "O")) ||
            ((disp7.innerText == "O") && (disp8.innerText == "O") && (disp9.innerText == "O")) ||
            ((disp1.innerText == "O") && (disp4.innerText == "O") && (disp7.innerText == "O")) ||
            ((disp2.innerText == "O") && (disp5.innerText == "O") && (disp8.innerText == "O")) ||
            ((disp3.innerText == "O") && (disp6.innerText == "O") && (disp9.innerText == "O")) ||
            ((disp1.innerText == "O") && (disp5.innerText == "O") && (disp9.innerText == "O")) ||
            ((disp3.innerText == "O") && (disp5.innerText == "O") && (disp7.innerText == "O"))) {
            player1Win = true;
        }

        // check player2 triple
        if (((disp1.innerText == "X") && (disp2.innerText == "X") && (disp3.innerText == "X")) ||
            ((disp4.innerText == "X") && (disp5.innerText == "X") && (disp6.innerText == "X")) ||
            ((disp7.innerText == "X") && (disp8.innerText == "X") && (disp9.innerText == "X")) ||
            ((disp1.innerText == "X") && (disp4.innerText == "X") && (disp7.innerText == "X")) ||
            ((disp2.innerText == "X") && (disp5.innerText == "X") && (disp8.innerText == "X")) ||
            ((disp3.innerText == "X") && (disp6.innerText == "X") && (disp9.innerText == "X")) ||
            ((disp1.innerText == "X") && (disp5.innerText == "X") && (disp9.innerText == "X")) ||
            ((disp3.innerText == "X") && (disp5.innerText == "X") && (disp7.innerText == "X"))) {
            player2Win = true;
        }


        if (player1Win) {
            showWinner(player1Name);
        } else if (player2Win) {
            showWinner(player2Name);
        }



        function showWinner(playerName) {
            winPopup.innerHTML = `<h1>${playerName} Win</h1>
                                  <button id="reset-btn" >RESET</button>`;
            winPopup.classList.add("on");
            let resetBtn = document.getElementById("reset-btn");
            resetBtn.addEventListener("click", () => { location.reload() })
        }



    }



}, true)
















