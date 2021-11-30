// Create a Address Object w. 3 properties (street, city, zipcode)
// create a function that shows all obj properties / values

let address = {
  street: "a",
  city: "b",
  zipcode: "c",
}

var showAddress = function(obj){
  for (let key in obj){
    console.log(key, obj[key]);
  }
}
console.log(showAddress(address));

// EX2 - create addr obj using Factory Function

// Factory Function (camelCase)
function createAddress(street, city, zipCode){
  return {
    street,
    city,
    zipCode
  }
}
let factoryAddr = createAddress('a','b','c');

// Constructor Function (Pascal)
function Address(street, city, zipCode){
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
let constructorAddr = new Address('a','b','c');

// check if address properties are equal
function areEqual(addr1, addr2){
  for(let key in addr1){
    if(addr1[key] !== addr2[key]){
      return false;
    }
  }
  return true;
}

// check if address are referencing same obj
function areSame(addr1, addr2){
  return addr1 === addr2;
}

// EX3 - create a constructor function of below obj
let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    {author: 'a', body: 'b',},
    {author: 'c', body: 'd'},
  ],
  isLive: true,
}

function Post(title, body, author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false
}


