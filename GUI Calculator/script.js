let disp = document.getElementById("display");
let box = document.getElementById("box");

box.addEventListener("click", (e) => {

    var target = e.target.textContent

    if (target != "=") {
        disp.innerHTML += `${target}`
    }

    var numExpression = ""

    if (target == "=") {
        for (let i = 0; i < disp.innerHTML.length; i++) {
            numExpression += disp.innerHTML[i]
        }
        disp.innerHTML = eval(numExpression)
    } else if (target == "AC") {
        disp.innerHTML = ""
    }


})
















































// trash code


// if (dispContent == "+") {
//     var numString = ""
//     for (i in disp.innerHTML) {
//         if (disp.innerHTML[i] != "+") {
//             numString += disp.innerHTML[i]
//         }
//         else {
//             operList.push(disp.innerHTML[i])
//         }
//     }

//     console.log(numString)
//     numList.push(numString)
//     console.log("numlist: ", numList)
//     console.log("operator list: ", operList)

//     numString = ""
//     console.log(numString)
// }