let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let gameOver = document.querySelector(".game-over")
let restartBtn = document.querySelector(".restart")
let scoreBoard = document.getElementById("score")

let blockSize = 25;

let row = 20
let col = 20

// board size
canvas.width = blockSize * row
canvas.height = blockSize * col

// sx=sy=foodx=foody = 25 is very imp becoz the snake will move block by block
// and the blocksize will be 25 same for food
let sX = blockSize;
let sY = blockSize;
let foodX = blockSize;
let foodY = blockSize;



let vx = 0
let vy = 0

let tail = []


restartBtn.addEventListener("click", () => {
    location.reload()
})


window.onload = () => {
    document.addEventListener('keyup', (e) => {
        mover(e)
    })

    setInterval(changer, 100);

}

let score = 0
function changer() {
    // check if snake collides with the wall
    if (sX == 0 || sX == 500 || sY == 0 || sY == 500) {
        gameOver.classList.add("on")
    }

    // check for collision between snake and food 
    if (sX == foodX && sY == foodY) {
        tail.push([foodX, foodY])
        scoreBoard.textContent = `Score: ${score}`
        score += 1
        randomFood()
        console.log(sX, "==", foodX, 'and', sY, "==", foodY)
    }

    sX += vx * blockSize;
    sY += vy * blockSize;
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = tail.length - 1; i > 0; i--) {
        tail[i] = tail[i - 1]
    }

    if (tail.length) {
        tail[0] = [sX, sY]
    }

    // food
    ctx.fillStyle = "white"
    ctx.fillRect(foodX, foodY, blockSize, blockSize)
    ctx.fill()

    // snake
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.fillRect(sX, sY, blockSize, blockSize)
    ctx.fill()


    for (let i = 0; i < tail.length; i++) {
        ctx.fillRect(tail[i][0], tail[i][1], blockSize, blockSize)
    }

}

// control logic
function mover(e) {
    if (e.code == "ArrowUp") {
        vx = 0
        vy = -1
    } else if (e.code == "ArrowDown") {
        vy = 1
        vx = 0
    } else if (e.code == "ArrowRight") {
        vx = 1
        vy = 0
    } else if (e.code == "ArrowLeft") {
        vx = -1
        vy = 0
    }
}

// renders food at random places in the range of 500 x 500
// like it will render food in addition of 25 
function randomFood() {
    foodX = Math.floor(Math.random() * row) * blockSize
    foodY = Math.floor(Math.random() * col) * blockSize
    console.log(Math.floor(Math.random()), foodX, foodY)
}