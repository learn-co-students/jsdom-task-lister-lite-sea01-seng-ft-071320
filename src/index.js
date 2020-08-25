document.addEventListener("DOMContentLoaded", () => {
  // your code here
  listenToFormSubmit()
  // handleTaskFormSubmit()
  // listenToButtonClicks();
});

function listenToFormSubmit() {
  const taskForm = document.getElementById("task-form");
  taskForm.addEventListener('submit', handleTaskFormSubmit);
}

function handleTaskFormSubmit(e){
  e.preventDefault();

  const taskInput = e.target.new;
  const taskValue = taskInput.value;

  const li = document.createElement("li")
  li.textContent = taskValue

  const taskList = document.getElementById("list")

  taskList.appendChild(li);

  taskInput.value = ''

  const deleteButton = document.createElement('button')
  deleteButton.innerText = "x"
  li.appendChild(deleteButton)
  deleteButton.addEventListener('click', () => taskList.removeChild(li))

//   var values = ["somewhat", "moderat", "super"];

//   var select = document.createElement("select");
//   select.name = "importance";
//   select.id = "importance"

//   for (const val of values) {
//     var option = document.createElement("option");
//     option.value = val;
//     option.text = val.charAt(0).toUpperCase() + val.slice(1);
//     select.appendChild(option);
//   }

//   var label = document.createElement("label");
//   label.innerHTML = "Choose your importance: "
//   label.htmlFor = "importance";

//   document.getElementById("container").appendChild(label).appendChild(select);
// }
}

