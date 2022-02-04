var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

//Add item
function addItem(e) {
  e.preventDefault();
  let selectValue = (document.querySelector("select").value);
  let multiple = parseInt(selectValue);
  console.log(selectValue);
  console.log(multiple);

  //Get input value
  var newItem = document.getElementById("item").value;
  //Create new li element
  var li = document.createElement("li");
  //add Class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode("Item " + newItem));



  // create delete button element
  var deleteButton = document.createElement("button");
  // add classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  // deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.innerText = "X";
  //append button to li
  li.appendChild(deleteButton);
  // //append li to list
  // itemList.appendChild(li);

  for (let i = 0; i < multiple; i++) {
    let cloneLi = li.cloneNode(true);
    let cloneButton = deleteButton.cloneNode(true);
    cloneButton.className = "btn btn-danger btn-sm float-right delete";
    // cloneButton.appendChild(document.createTextNode("X"));
    cloneLi.appendChild(deleteButton);
    cloneLi.textContent = cloneLi.textContent.split("").filter(c => c !== "X").join("").concat(` (${i + 1})`);

    itemList.appendChild(cloneLi);
  }
}

//Remove item
function removeItem(e) {
  let itemsList = Array.from(document.getElementsByClassName("delete"));
  let itemDelete = e.target.parentElement;

  for (let button in itemsList) {
    let listItem = itemsList[button].parentElement;
    if (listItem === itemDelete) {
      console.log('same')
    }
  }

  console.log(itemsList);
  // if (e.target.classList.contains("delete")) {
  //   // if (confirm("Are you sure?")) {
  //   var li = e.target.parentElement;
  //   console.log(li);
  //   // itemList.removeChild(li);
  //   // }
  // }
}

//filter Event
function filterItems(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li");
  //conver to an array
  Array.from(items).forEach(item => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}