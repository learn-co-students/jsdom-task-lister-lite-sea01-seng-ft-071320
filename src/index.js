document.addEventListener("DOMContentLoaded", () => {
  // your code here

  listenForFormSubmit();
  // listenForTaskDelete();
  

}); // end DOMContentLoaded




function listenForFormSubmit() {
  const taskForm = document.getElementById('create-task-form')
    //find the form to listen to and store as a var

  taskForm.addEventListener('submit', handleTaskSubmit)
    //set an event listern for the form "on submit" and call function
}

function handleTaskSubmit(e){ //func is only called if listener is activated
  e.preventDefault()  //pervent default behavior from loading new page

  const task = document.getElementById('new-task-description') //find the value of the form field we want and store in var

  //now to put task to screen
  const taskElement = document.createElement('li') //create a li element to go inside the parent
  taskElement.textContent = task.value  //assign the user value to the taskElement node

  const taskList = document.getElementById('tasks')  //locate where we want to append our new content/element
  taskList.appendChild(taskElement)//append it
  task.value = ''

  const button = document.createElement('button')
  button.innerHTML = "x"
  taskElement.append(button)

  taskElement.addEventListener('click', function(){
  taskElement.remove()
  } )

  

}


// function listenForTaskDelete(){


// }

// function handleTaskDelete(e){
//   const taskList = document.getElementById('tasks') //get parent of the task, which is taskList
//   // debugger
//    taskList.removeChild(taskList.childNodes[0])
 
// }