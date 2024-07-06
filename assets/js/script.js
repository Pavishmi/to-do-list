const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
  if(inputBox.value === ''){
    alert("You must write something");
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click",function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    saveData();
  }
  if(event.target.tagName === "SPAN"){
    event.target.parentElement.remove();
    saveData();
  }
},false);

//To save the data so that it can be displayed when using the website again
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

//display data whenever we open the website again
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();