

function populateTodoList(todos) {
  // let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  // Selecting ul first
  let ul = document.querySelector('#todo-list');

  // Mapping the todos object to create a new array consisting of tasks.
  let todoList = todos.map(elem => elem.task);
  
  // Iterating through each task item to create the exact number of li elements we need along with check and trash icons for the span tag.
  todoList.forEach(function(item) {
    let li = document.createElement('li');
    let text = document.createTextNode(item);
    li.appendChild(text);
    li.classList.add('list-group-item');
    
    // Creating icons
    let check = document.createElement('i');
    check.classList.add('fa', 'fa-check');
    let trash = document.createElement('i');
    trash.classList.add('fa','fa-trash');
    let span = document.createElement('span');
    span.classList.add('badge', 'bg-primary', 'rounded-pill');
    
    // Appending the elements created above to where they belong
    span.appendChild(check);
    span.appendChild(trash);
    li.appendChild(span);
    ul.appendChild(li);

    // A bit of styling
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    
    // Event listener for the check button to line through when clicked.
    check.addEventListener('click', (e) => {
      e.preventDefault();
      li.style.textDecoration = 'line-through';

    })
    // An event listener to delete a todo list when trash icon is clicked.
    trash.onclick = (e) => {
      e.preventDefault();
      li.remove();
    }

  })

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// I had to comment the initial function out as it was interfering with the rest of my code and creating duplicated empty lists when I add a new todo list.
// function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  // event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!


  // The button element is selected and a variable is defined for it.
  let addButton = document.querySelector('.btn');
  
  // An event listener for the button
  addButton.addEventListener('click', (e) => {
    // The code below prevents the page from refreshing when we click the 'Add Todo' button.
    e.preventDefault();
    // The input is selected and a new text node is created for a new list to be added
    let input = document.querySelector('#todoInput');
    let newTodo = document.createTextNode(input.value);
    
    // A new list element is created along with with new check, trash and span. This is where a new list goes when it is added.
    let li = document.createElement('li');
    li.appendChild(newTodo);
    li.classList.add('list-group-item');
    let check = document.createElement('i');
    check.classList.add('fa', 'fa-check');
    let trash = document.createElement('i');
    trash.classList.add('fa','fa-trash');
    let span = document.createElement('span');
    span.classList.add('badge', 'bg-primary', 'rounded-pill');

    // An event listener for the check icon to line through when it is clicked.
    check.addEventListener('click', (e) => {
      e.preventDefault();
      li.style.textDecoration = 'line-through';
    })
    // An other event listener for the trash icon to delete a list when clicked.
    trash.onclick = (e) => {
      e.preventDefault();
      li.remove();

    }
    // The original ul is selected and the new li is appended to it in.
    let ul = document.querySelector('#todo-list');
    span.appendChild(check);
    span.appendChild(trash);
    li.appendChild(span);
    ul.appendChild(li);
  // A bit of styling so that everything appears the way it should.
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';

  input.value = ''; 

  })
// }

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  
}
