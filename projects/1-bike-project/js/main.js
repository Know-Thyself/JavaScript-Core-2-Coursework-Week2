// Variables are declared and defined to access and manipulate The DOM.

// Part One
let blue = document.querySelector('#blueBtn');
let orange = document.querySelector('#orangeBtn');
let green = document.getElementById('greenBtn');
let jumbotron = document.querySelector('.jumbotron');
let donateABikeBtn = document.getElementsByClassName('btn btn-primary btn-lrg');
let volunteer = document.querySelector('.btn-secondary');

// Callback functions for each color
let whenBlueIsClicked = function() {
    jumbotron.style.backgroundColor = '#588fbd';
    donateABikeBtn[0].style.backgroundColor = '#ffa500';
    volunteer.style.color = '#ffffff';
    volunteer.style.backgroundColor = '#000000';
   
}

let whenOrangeIsClicked = function() {
    jumbotron.style.backgroundColor = '#f0ad4e';
    donateABikeBtn[0].style.backgroundColor = '#5751fd';
    volunteer.style.backgroundColor = '#31b0d5';
    volunteer.style.color = 'white';

}

let whenGreenIsClicked = function() {
    jumbotron.style.backgroundColor = '#87ca8a';
    donateABikeBtn[0].style.backgroundColor = 'black';
    volunteer.style.backgroundColor = '#8c9c08';

}

// Event listeners to callback the functions created above
blue.addEventListener('click', whenBlueIsClicked);
orange.addEventListener('click', whenOrangeIsClicked);
green.addEventListener('click', whenGreenIsClicked);

// Part Two
// Selecting and assigning variables for the elements to be targeted by the event listener. 
let buttons = document.getElementsByTagName('button');
let button = buttons[4];
let emailInput = document.querySelector('#exampleInputEmail1'); 
let nameInput = document.querySelector('#example-text-input');
let textArea = document.querySelector('#exampleTextarea'); 
let regEx = /\S+@\S+\.\S+/;

// An event listener with an anonymous function to check the required form validation criteria.
button.addEventListener('click', (e) => {
    e.preventDefault();
   if (emailInput.value !== '' && regEx.test(emailInput.value) === true && nameInput.value !== '' && textArea.value.length > 0 ) {
       alert ('Thank you for filling out the form!');
       emailInput.value = '';
       textArea.value = '';
       nameInput.value = '';
   } else if (nameInput.value === '') {
       nameInput.style.backgroundColor = 'red';
     
     } else if (textArea.value.length === 0) {
       textArea.style.backgroundColor = 'red';
       } else if (emailInput.value === '' || regEx.test(emailInput.value) === false) {
       emailInput.style.backgroundColor = 'red';
         } 
});
