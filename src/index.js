function taskForm(e) {
  const form = document.getElementById("task-form");
  const taskValue = form.task.value;

  e.preventDefault();

  addTask(taskValue, form.priority.value);
  clearTaskForm();
}

function clearTaskForm() {
  const form = document.getElementById("task-form");
  form.task.value = "";
  form.priority.value = "1";
}

function addTask(taskValue, taskPriority) {
  const taskList = document.getElementById("task-list");
  const newId = taskList.getElementsByTagName("li").length + 1;

  // Creates the task list item with task and prio classes and id
  const task = document.createElement("li");
  task.classList.add("task");
  task.classList.add(`task-prio-${taskPriority}`);
  task.dataset.priority = taskPriority;
  task.id = `task-${newId}`;

  // Creates a tag containing the task value
  const newTaskValue = document.createElement("div");
  newTaskValue.textContent = taskValue;
  newTaskValue.id = `task-value-${task.id}`;
  newTaskValue.classList.add("task-value");

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
  task.appendChild(removeTaskLink);
  task.appendChild(editTaskLink);

  // Adds the entire task list item to the task list
  taskList.appendChild(task);

  // Re-initializes the event listeners for all of the edit and remove task links
  initRemoveTaskLinks();
  initEditTaskLinks();
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

function initTaskForm() {
  const form = document.getElementById("task-form");

  form.addEventListener("submit", taskForm, false);
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
