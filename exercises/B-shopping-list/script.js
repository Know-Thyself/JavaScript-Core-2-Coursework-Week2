function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  content.appendChild(ul);
  
  // Looping through the shopping array to create list items 
  shopping.forEach(function(item){
    let li = document.createElement("li");
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);
  })
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
