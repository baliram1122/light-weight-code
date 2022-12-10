let inputTask = document.getElementById("input-task")
let addBtn = document.getElementById("add-btn")
let clearBtn = document.getElementById("clear-btn")
let taskContainer = document.getElementById("task-container")
let taskList = []
let localArray = JSON.parse(localStorage.getItem('tasks'))

if (localArray) {
    taskList = localArray
    displayTask(taskList)
}


addBtn.addEventListener("click", () => {
    var taskValue = inputTask.value
    if (taskValue == "") {
        alert("You must enter something")
    } else {
        taskBlock = document.createElement("div")
        taskBlock.classList.add("task-block")

        task = document.createElement("div")
        mainTask = document.createTextNode(taskValue)
        task.appendChild(mainTask)
        task.classList.add("task")

        btnbox = document.createElement("div")
        btnbox.classList.add("btn-box")

        doneBtn = document.createElement("button")
        doneBtn.textContent = "Done"
        doneBtn.classList.add("done-btn")

        deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete-btn")

        taskBlock.appendChild(task)
        taskBlock.appendChild(btnbox)
        btnbox.appendChild(doneBtn)
        btnbox.appendChild(deleteBtn)

        inputTask.value = ""

        taskBlock1 = taskBlock.outerHTML
        taskList.push(taskBlock1)
        localStorage.setItem('tasks', JSON.stringify(taskList))
        displayTask(taskList)

    }
})


clearBtn.addEventListener('click', () => {
    localStorage.clear('tasks')
    taskList = []
    displayTask(taskList)
})



// don't create any element (especially button) that have textContent Done or Delete
document.addEventListener('click', (e) => {
    if (e.target.textContent == 'Done') {
        e.target.parentElement.previousElementSibling.style.textDecoration = "line-through"
    }

    if (e.target.textContent == 'Delete') {
        div11 = e.target.parentElement.parentElement
        for (let i = 0; i < taskList.length; i++) {
            // checking if the currently clicked element is equal to array element 
            // for the index to remove the element from the array and passing the new updated
            // array to the local storage
            if (div11.outerHTML === taskList[i]) {
                taskList.splice(i, 1)
                localStorage.setItem('tasks', JSON.stringify(taskList))
                displayTask(taskList)
                break
            }
        }
        e.target.parentElement.parentElement.style.display = "none"
    }
})



function displayTask(taskList) {
    let allTasks = ""
    for (let i = 0; i < taskList.length; i++) {
        allTasks += `${taskList[i]}`
    }
    taskContainer.innerHTML = allTasks
}















// old done and delete btn logic
    // doneBtn.addEventListener("click", (e) => {
    //     e.target.parentElement.previousElementSibling.style.textDecoration = "line-through"
    //     console.log('done')
    // })

    // deleteBtn.addEventListener("click", (e) => {
    //     e.target.parentElement.parentElement.style.display = "none"
    // })


















