const body = document.body;
const firstDiv = document.querySelector("div");
// Create Elements
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");

// Add Elements
firstDiv.append("Just a ", "stringgg"); //versatile
firstDiv.append(h1);
firstDiv.appendChild(h2); // only elements
firstDiv.appendChild(h3);

// Modify Text of Element
h1.innerText = "I'm a h1 tag";
h2.innerText = "I'm a h2 tag"; // displays only visible text
h3.textContent = "I'm a h3 tag"; // displays ALL text

const htmlTextDiv = document.querySelector("#htmlTextDiv");
console.log(htmlTextDiv.innerText);
console.log(htmlTextDiv.textContent);

// Modify Element HTML
const blockElement = document.querySelector("block");
blockElement.innerHTML = "<div>block1 <strong>(innerHTML)</strong></div>"; //CSSP danger

const wrapper = document.createElement("div");
const strong = document.createElement("strong");
const strongItalic = document.createElement("i");
strongItalic.innerText = " italicccc";
strong.append("(innerText)");
strong.appendChild(strongItalic);
wrapper.append("block 2 ", strong);
blockElement.appendChild(wrapper);

// Remove Elements
const greetingsDiv = document.querySelector("#greetingsDiv");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
spanBye.remove(); //remove element
greetingsDiv.append(spanBye); //insert back
// greetingsDiv.parentNode.insertAfter(spanBye, greetingsDiv);

// Modify Element Attributes
console.log(spanHi.getAttribute("id"));
spanHi.setAttribute("title", "blahblahblah");
spanHi.removeAttribute("id");

// Modify Data Attributes
console.log(spanHi.dataset.test);
console.log(spanHi.dataset.longerName);

// Modify Element Class
spanHi.classList.add("new-class");
spanHi.classList.remove("hi1");
spanHi.classList.toggle("hi3"); // adds or removes
spanHi.classList.toggle("hi4", false); //removes
spanHi.classList.toggle("hi5", true); //adds

// Modify Element Style
spanHi.style.color = "red";
spanBye.style.backgroundColor = "yellow";

// function myFunction() {
//   // Create an "li" node:
//   const node = document.createElement("li");
//   // Create a text node:
//   const textnode = document.createTextNode("Water");
//   // Append the text node to the "li" node:
//   node.appendChild(textnode);
//   // Append the "li" node to the list:
//   document.getElementById("myList").appendChild(node);
// }
