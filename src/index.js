document.addEventListener("DOMContentLoaded", () => {
  listenToFormSubmit()
  
});

function listenToFormSubmit() {
  const taskForm = document.getElementById("task-form")
  taskForm.addEventListener('submit', handleTaskFormSubmit )
}
  function handleTaskFormSubmit(e) {
    e.preventDefault();
    const taskInput = e.target.new
    const taskValue = taskInput.value;
  
    
    const taskList = document.getElementById('list');
    const li = document.createElement('li');
    li.textContent = taskValue;
    taskList.appendChild(li);

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'delete'
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => taskList.removeChild(li))

    const colorList = document.createElement('button')
  }

// document.getElementById('importance').onclick = function() {

//     var values = ["important", "kinna important", "not important"];
  
//     var select = document.createElement("select");
//     select.name = "importance";
//     select.id = "importance"
  
//     for (const val of values) {
//       var option = document.createElement("option");
//       option.value = val;
//       option.text = val.charAt(0).toUpperCase() + val.slice(1);
//       select.appendChild(option);
//     }
  
//     var label = document.createElement("label");
//     label.innerHTML = "Importance level: "
//     label.htmlFor = "importance";
  
//     document.getElementById("importance").appendChild(label).appendChild(select);
//   }