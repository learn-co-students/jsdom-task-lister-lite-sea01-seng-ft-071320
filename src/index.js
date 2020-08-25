document.addEventListener("DOMContentLoaded", () => {
  // your code here
  listenToFormSubmit()
});

const form = document.getElementById(`create-task-form`)
const newTask = document.getElementById(`new-task-description`)
const list = document.getElementById(`tasks`)


function listenToFormSubmit(){

form.addEventListener('submit',function(e){
  e.preventDefault()
  const list = document.createElement("li")
  const newItem = document.createTextNode(`${newTask.value}`);
  list.appendChild(newItem);
  document.getElementById("list").appendChild(list); 
  
  const button = document.createElement("button")
  button.textContent = 'x'
  list.appendChild(button);

  list.addEventListener("click", function() {
    list.remove()
  })
  
  newTask.value = ''
})
};








