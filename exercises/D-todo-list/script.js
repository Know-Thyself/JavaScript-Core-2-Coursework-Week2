function todoList(todos) {
  // Write your code here...
  // Finding the div container and appending ul to it.
  let content = document.querySelector('#content');

  let ul = document.createElement('ul');
  content.appendChild(ul);
  
  // To create a new array of todo list from the values of the array object.
  let needToDo = todos.map(element => element.todo);

  // To create li elements and populate them with todo list
  needToDo.forEach(element => {
  let li = document.createElement('li');
  ul.appendChild(li);

  let text = document.createTextNode(element);
  li.appendChild(text);
  li.style.fontSize = '2.5rem';
  
  // A condition to highlight and remove the highligh
  let whenClicked = function() {
     if(li.style.backgroundColor != 'green') {
      li.style.backgroundColor = 'green';
    } else if (li.style.backgroundColor = 'green') {
      li.style.backgroundColor = 'white';
    }
  }

  li.addEventListener('click', whenClicked);
    
  });

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);