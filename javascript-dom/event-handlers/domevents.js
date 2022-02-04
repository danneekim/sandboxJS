const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

/** addEventListener */
// grandparent.addEventListener("click", (event) => {
//   console.log('Grandparent Bubble');
// });
// parent.addEventListener("click", (event) => {
//   console.log('Parent Bubble');
// }, { once: true });
// child.addEventListener("click", (event) => {
//   console.log('Child Bubble');
// });


/** Event Capturing/Bubbling: {capture: true} */
// grandparent.addEventListener("click", (event) => {
//   console.log('Grandparent Capture');
// }, { capture: true });
// grandparent.addEventListener("click", (event) => {
//   console.log('Grandparent Bubble');
// });

// parent.addEventListener("click", (event) => {
//   console.log('Parent Capture');
// }, { capture: true });
// parent.addEventListener("click", (event) => {
//   console.log('Parent Bubble');
// });

// child.addEventListener("click", (event) => {
//   console.log('Child Capture');
// }, { capture: true });
// child.addEventListener("click", (event) => {
//   console.log('Child Capture');
// });


/** stopPropagation: event.stopPropagation()*/
// child.addEventListener("click", (event) => {
//   console.log('Child Bubble');
// });
// parent.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log('Parent Bubble');
// });
// grandparent.addEventListener("click", (event) => {
//   console.log('Grandparent Bubble');
// });


/** Event Runs once: {once: true}  */
// grandparent.addEventListener("click", (event) => {
//   console.log('Grandparent Bubble');
// }, { once: true });
// parent.addEventListener("click", (event) => {
//   console.log('Parent Bubble');
// });
// child.addEventListener("click", (event) => {
//   console.log('Child Bubble');
// });

/** removeEventListener */
// grandparent.addEventListener("click", (event) => {
//   console.log('Grandparent Bubble');
// });

// parent.addEventListener("click", printHi);
// setTimeout(() => parent.removeEventListener("click", printHi), 2000);

// child.addEventListener("click", (event) => {
//   console.log('Child Bubble');
// });

// function printHi() {
//   console.log('hi')
// }


/** Event Delegation*/
const divs = document.querySelectorAll("div");
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  })
}

addGlobalEventListener("click", "div", e => { console.log('hi') })

// divs.forEach(div => {
//   div.addEventListener("click", (e) => { console.log('hi') })
// })
const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv)





