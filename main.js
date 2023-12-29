const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("You Must Write Something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        let div = document.createElement("div")
        let icon2 = document.createElement("i")
        span.innerHTML = "\u00d7";
        div.classList = "circle" 
        icon2.classList = "fas fa-check"
        li.appendChild(span);
        li.appendChild(div);
        li.appendChild(icon2);

    }
    inputBox.value = "";
    saveData()
};

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
        saveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
};
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
};
showTask();