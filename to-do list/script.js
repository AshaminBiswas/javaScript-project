const inputBox = document.querySelector(".input-box")
const listItem = document.querySelector(".list-item")

function addTask() {
    if (inputBox.value === '') {
        alert("You must write somthing!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listItem.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    inputBox.value = "  "
    saveData()
}


listItem.addEventListener("click",function(e){
    console.log("click");
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
    
},false)

function saveData() {
    localStorage.setItem("data",listItem.innerHTML)
}

function showTask() {
    listItem.innerHTML = localStorage.getItem("data")
}
showTask()