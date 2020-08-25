function taskForm(e) {
  const form = document.getElementById("task-form");

  e.preventDefault();

  const taskObj = {
    value: form.task.value,
    priority: form.priority.value,
    color: form.color.value,
  };

  addTask(taskObj);
  clearTaskForm();
}

function clearTaskForm() {
  const form = document.getElementById("task-form");
  form.task.value = "";
  form.priority.value = "1";
}

function addTask(taskObj) {
  const taskList = document.getElementById("task-list");
  const newId = taskList.getElementsByTagName("li").length + 1;

  // Creates the task list item with task and prio classes and id
  const task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("flow-left");
  task.classList.add(`task-prio-${taskObj.priority}`);
  task.classList.add(`task-color-${taskObj.color}`);
  task.dataset.priority = taskObj.priority;
  task.dataset.color = taskObj.color;
  task.id = `task-${newId}`;

  // Creates a tag containing the task value
  const newTaskValue = document.createElement("div");
  newTaskValue.textContent = taskObj.value;
  newTaskValue.id = `task-value-${task.id}`;
  newTaskValue.classList.add("task-value");

  // Creates a tag containing the task priority flag
  const taskPrio = document.createElement("div");
  taskPrio.textContent = taskTag(taskObj.priority);
  taskPrio.classList.add("task-prio");

  // Creates a tag containing the edit link for this task
  const editTaskLink = document.createElement("div");
  editTaskLink.textContent = "edit";
  editTaskLink.id = `edit-${task.id}`;
  editTaskLink.classList.add("edit-task-link");

  // Creates a tag containing the remove link for this task
  const removeTaskLink = document.createElement("div");
  removeTaskLink.textContent = "delete";
  removeTaskLink.id = `remove-${task.id}`;
  removeTaskLink.classList.add("remove-task-link");

  // Adds the task value and edit and remove links to the empty list item
  task.appendChild(newTaskValue);
  task.appendChild(taskPrio);
  task.appendChild(removeTaskLink);
  task.appendChild(editTaskLink);

  // Adds the entire task list item to the task list
  taskList.appendChild(task);

  // Re-initializes the event listeners for all of the edit and remove task links
  initRemoveTaskLinks();
  initEditTaskLinks();
}

function taskTag(prioNum) {
  if (prioNum === "0") {
    return "Low";
  } else if (prioNum === "1") {
    return "Medium";
  } else if (prioNum === "2") {
    return "High";
  }
}

function editTask(e) {
  const taskId = e.target.id.replace("edit-", "");
  const task = document.getElementById(taskId);

  populateTaskForm(task);

  removeTask(e); // Remove the task once we've gotten the task object out
}

function populateTaskForm(task) {
  const form = document.getElementById("task-form");
  const taskValue = task.getElementsByClassName("task-value")[0].textContent;

  form.task.value = taskValue;
  form.priority.value = task.dataset.priority;
}

function removeTask(e) {
  const taskId = e.target.id.replace("remove-", "").replace("edit-", "");
  const task = document.getElementById(taskId);

  task.parentNode.removeChild(task);
}

function sortForm(e) {
  const form = document.getElementById("sort-form");

  e.preventDefault();

  switch (form.sort.value) {
    case "high":
      sortTasksByHigh();
      break;

    case "low":
      sortTasksByLow();
      break;

    case "rainbow":
      // Sort by ROYGBIV
      sortTasksByRainbow();
      break;

    default:
      // Sort by Id
      sortTasksById();
  }
}

function sortTasksById() {
  const taskList = document.getElementById("task-list");
  const newList = taskList.cloneNode(false);

  let sortedList = Array.from(taskList.childNodes);

  sortedList.sort(function (a, b) {
    return (
      parseInt(a.id.replace("task-", "")) - parseInt(b.id.replace("task-", ""))
    );
  });

  for (let i = 0; i < sortedList.length; i++) {
    newList.appendChild(sortedList[i]);
  }

  for (let i = 0; i < sortedList.length; i++) {
    newList.appendChild(sortedList[i]);
  }

  taskList.parentNode.replaceChild(newList, taskList);
}

function sortTasksByHigh() {
  const taskList = document.getElementById("task-list");
  const newList = taskList.cloneNode(false);

  let sortedList = Array.from(taskList.childNodes);

  sortedList.sort(function (a, b) {
    return parseInt(b.dataset.priority) - parseInt(a.dataset.priority);
  });

  for (let i = 0; i < sortedList.length; i++) {
    newList.appendChild(sortedList[i]);
  }

  taskList.parentNode.replaceChild(newList, taskList);
}

function sortTasksByLow() {
  const taskList = document.getElementById("task-list");
  const newList = taskList.cloneNode(false);

  let sortedList = Array.from(taskList.childNodes);

  sortedList.sort(function (a, b) {
    return parseInt(a.dataset.priority) - parseInt(b.dataset.priority);
  });

  for (let i = 0; i < sortedList.length; i++) {
    newList.appendChild(sortedList[i]);
  }

  taskList.parentNode.replaceChild(newList, taskList);
}

function sortTasksByRainbow() {
  const taskList = document.getElementById("task-list");
  const newList = taskList.cloneNode(false);

  let sortedList = Array.from(taskList.childNodes);

  sortedList.sort(function (a, b) {
    return parseInt(a.dataset.color) - parseInt(b.dataset.color);
  });

  for (let i = 0; i < sortedList.length; i++) {
    newList.appendChild(sortedList[i]);
  }

  taskList.parentNode.replaceChild(newList, taskList);
}

function initTaskForm() {
  const form = document.getElementById("task-form");

  form.addEventListener("submit", taskForm, false);
}

function initSortForm() {
  const form = document.getElementById("sort-form");

  form.addEventListener("submit", sortForm, false);
}

function initRemoveTaskLinks() {
  const links = document.getElementsByClassName("remove-task-link");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", removeTask, false);
  }
}

function initEditTaskLinks() {
  const links = document.getElementsByClassName("edit-task-link");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", editTask, false);
  }
}

initTaskForm();
initRemoveTaskLinks();
initEditTaskLinks();
initSortForm();
