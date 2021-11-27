console.log('Hello - index2.js');

// let radius = 1;
// let x = 1;
// let y = 1;
// let isVisible = true;
// function draw(){ console.log('draw')};
// function move(){ console.log('move')}.

// Object Oriented Programming (OOP)

// Object
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function(){
    console.log('draw');
  },
}
circle.draw();

/*Camel Notation: oneTwoThreeFour  */
/*Pascal Notation: OneTwoThreeFour */

// Factory Functions (camel)
function createCircle(radius,location,isVisible,){
  return {
    radius: radius, // radius,
    location: location,
    isVisible: isVisible,
    draw: function(){
      console.log('draw');
    },
  };
  /* simplified */
  // return {
  //   radius,
  //   location,
  //   isVisible,
  //   draw(){ 
  //     console.log('draw')
  //   },
  // };
}
const circle1 = createCircle(1,{x:1,y:1},true,);
console.log(circle1);
const circle2 = createCircle(2,{x:2,y:2},true);
console.log(circle2);


// Constructor Functions (pascal)
function Circle(radius,location,isVisible){
  this.radius = radius,
  this.location = location,
  this.isVisible = isVisible,
  this.draw = function(){
    console.log('draw');
  }
}
const circle3 = new Circle(3,{x:3,y:3},true);
console.log(circle3);

// Dynamic Nature of Objects
const circleObject = {
  radius: 1,
}
// circleObject = {}; <- error - change const obj properties/methods

// add properties
circleObject.color = 'yellow';
circleObject.draw = function(){};
console.log(circleObject);
// delete properties
delete circleObject.color;
delete circleObject.draw;
console.log(circleObject);

// Constructor Properties
new Object(); // {}
new String(); // '',"",``
new Boolean(); // true,false
new Number(); // 1, 2, 3, ...

// Functions are Objects
function CircleV2(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}
// CircleV2.call({}, 1,);
// CircleV2.apply({}, 1, [1,2,3]);
const v2 = new CircleV2(2);




