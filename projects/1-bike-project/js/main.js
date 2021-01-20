// Variables are declared and defined to access and manipulate The DOM.

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