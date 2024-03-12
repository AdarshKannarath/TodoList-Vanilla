const todoInput=document.querySelector(".todo-input")
const todoBtn=document.querySelector(".todo-button")
const todoList=document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo");

todoBtn.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteBtn)
filterOption.addEventListener("click", filterTodo);

function addTodo(e){
    e.preventDefault()

    if(todoInput.value===""){
        alert("Add a todo")
        return
    }
        
    //Create Todo list to display
    const todoDiv=document.createElement("div")
    todoDiv.classList.add("todo")
    
    const newTodo=document.createElement("li")
    newTodo.innerText=todoInput.value
    saveLocalTodos(todoInput.value);
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    const completedBtn=document.createElement("button")
    completedBtn.innerHTML='<i class="fas fa-check"></i>'
    completedBtn.classList.add("complete-btn")
    
    todoDiv.appendChild(completedBtn)

    const trashBtn=document.createElement("button")
    trashBtn.innerHTML='<i class="fas fa-trash"></i>'
    trashBtn.classList.add("trash-btn")
    todoDiv.appendChild(trashBtn)

    todoList.appendChild(todoDiv)
    todoInput.value=""
}


function deleteBtn(e){

    if(e.target.classList[0]==='trash-btn'){
        e.target.parentElement.remove()
        console.log("trash")
    }

    if(e.target.classList[0]==='complete-btn'){
        e.target.parentElement.classList.toggle("completed")
        console.log("compleet")
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}  
