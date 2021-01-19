function highlightWords(paragraph, colours) {
  // Write your code here...
  let content = document.querySelector('#content');

  // p tag along with a text of paragraph is created and appended to the div content
  let p = document.createElement('p');
  let text = document.createTextNode(paragraph);
  p.appendChild(text);
  p.style.fontSize = '2.5rem';
  content.appendChild(p);
  
  // select tag is created and appended to the div element
  let select = document.createElement('select');
  content.appendChild(select);
  
  // option tags are created and appended to select
  colours.forEach(function(item){
    let options = document.createElement('option');
    let text2 = document.createTextNode(item);
    options.appendChild(text2);
    select.appendChild(options);
  }) 
  // The paragraph is split to create multiple spans
  let words = paragraph.split(' ');
  words.forEach(function(element) {
     let span = document.createElement('span');
     let text3 = document.createTextNode(element + ' ');
     span.appendChild(text3);
     p.appendChild(span);
     
    // A callback function is created to check the value of the select option to be used as a background color to be initiated later by the event listener.
    let singleSpan = function () {
       document.getElementsByTagName('select').value;
       span.style.backgroundColor = select.value;
    }
     
     // Refers to the callback function when a user clicks on a word.
     span.addEventListener('click', singleSpan);

  })
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
