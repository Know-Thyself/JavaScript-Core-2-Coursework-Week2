function readingList(books) {
  // Write your code here...
  let content = document.querySelector('#content');
  content.style.display = 'flex';
  content.style.justifyContent = 'space-evenly';
  content.style.width = '100vw';

  let ul = document.createElement('ul');
  content.appendChild(ul);
   
  let titleAndAuthor = books.map(element => element.title + ' ' + element.author);

  titleAndAuthor.forEach(function(item){
  let li = document.createElement('li');
  li.style.display = 'inline-block';
  li.style.textAlign = 'center';
  li.style.width = '30vw';
  li.style.margin = '10px';
  li.style.fontSize = '2rem';
  li.style.color = 'white';
  ul.appendChild(li);

  let p = document.createElement('p');
  let text = document.createTextNode(item);
  p.appendChild(text);
  li.appendChild(p); 

  let img = document.createElement('img');
  img.setAttribute('src', booksImages);
  li.appendChild(img);

 })

 let newImg = document.getElementsByTagName('img');
 newImg[1].src = booksImages[1];
 newImg[2].src = booksImages[2];

// The colors are chosen based on whether or not I have read the books.
let list = document.getElementsByTagName('li');
list[0].style.backgroundColor = 'green';
list[1].style.backgroundColor = 'red';
list[2].style.backgroundColor = 'red';
}

// Created an array of url links that I have found from creative commons.
const booksImages = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNubQYPNSS-DplWUtdg4hc6PmgIdWaqaABTSEeQSPcJIcckjo9OKmhAlug_rw3D-31wFPI-M&usqp=CAc', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-f41Ys8egAHLYj6_NyOlBaBTH43i4bzgkgPpPi6aY1Vk9K78&usqp=CAc','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwuRGcBdhppeVmH71k5RnRjeSbm3S3qU48o7oSqQXiD84wpkkqTbA36gR-Q&usqp=CAc']


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);