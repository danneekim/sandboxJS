function changeColor(element) {
  element.style.backgroundColor = "#333";
}

/**getElementById (single) */
const grandparent1 = document.getElementById("grandparent-id");
// changeColor(grandparent1);

/** getElementsByClassName (collection)*/
const parents1 = Array.from(document.getElementsByClassName("parent"));
// parents.forEach(changeColor);

/** querySelector (first element)*/
const grandparent2 = document.querySelector("#grandparent-id");
const parents2 = document.querySelector(".parent");
// changeColor(grandparent2);
// changeColor(parent);

/** querySelectorAll (all elements)*/
const parents3 = document.querySelector(".parent");
// parents3.forEach(changeColor);

/** TRAVERSE DOWN*/
const gParent = document.querySelector(".grandparent");
const parents4 = Array.from(gParent.children);
// parents4.forEach((el) => changeColor(el));

// 1st child of parent (1)
const parentsUno = parents4[0];
const children = parentsUno.children;
// changeColor(children[0]);

// 1st grandchild of grandparent (2)
const childOne = gParent.querySelector(".child");
// changeColor(childOne);

// all grandchild of grandparent
const allChildren = gParent.querySelectorAll(".child");
// allChildren.forEach(changeColor);

/** TRAVERSE UP */
// via parentElement
const childA = document.querySelector("#child-one");
const parentA = childA.parentElement;
const grandparentA = parentA.parentElement;
// changeColor(parentA);
// changeColor(grandparentA);

// via closest (same as querySelector but UP)
const grandparentB = childA.closest(".grandparent");
// changeColor(grandparentB);

/** TRAVERSE SIDEWAYS*/
// via nextElementSibling
const siblingA = document.querySelector("#child-one");
const siblingB = siblingA.nextElementSibling;
// changeColor(siblingB);

// via previousElementSibling
changeColor(siblingB.previousElementSibling);
