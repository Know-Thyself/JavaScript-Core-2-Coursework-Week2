function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector('#content');
  let select = document.createElement('select')
  content.appendChild(select);
  
  // ForEach method is used to iterate through the array to populate p with a list of colours as well as options.
  colours.forEach(function(item){
    let p = document.createElement('p');
    let text = document.createTextNode(item);
    p.appendChild(text);
    content.appendChild(p);
    p.style.fontSize = '2rem';
    
    // A callback function is defined below to be used later on when it is called.
    let whenSelected = function() {
      let option = document.createElement('option');
      let text2 = document.createTextNode('You have selected:' + ' ' + item);
      option.appendChild(text2);
      p.appendChild(option);

      p.style.backgroundColor = item;
      p.style.fontSize = '3rem';
    
    }
    
    // The callback function will be triggered upon click
    p.addEventListener('click', whenSelected);

  })
  

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
