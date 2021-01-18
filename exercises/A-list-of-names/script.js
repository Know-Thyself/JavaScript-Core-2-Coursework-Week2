let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

let names = people.map(elem => elem.name);
var jobs = people.map(elem => elem.job);

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  let h1 = document.createElement("h1");
  content.appendChild(h1);

  for (let i = 0; i < names.length; i++) {
    text = document.createTextNode(names[i] + " ");
    h1.appendChild(text);
  }
    
  let h2 = document.createElement("h2");
  content.appendChild(h2);

   for (let i = 0; i < jobs.length; i++) {
    text2 = document.createTextNode(jobs[i] + " ");
    h2.appendChild(text2);
  }
}

listOfNames(people);
