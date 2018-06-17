//defined function
function sayHi(){
  console.log('HI');
}
//call function

//defined
function sum(x,y){
  console.log(x + y);
}
//call
sum(20,999);

//write a function with 2 parameters and multiplies them
function multiply(x,y){
  console.log(x * y);
}
multiply(2,4);
// X and Y can be named anything

//different data types
var num = 6;
var str = '6';

var arr = ['cat', 'hat', 'bat', 'rat'];
console.log(arr.length);
for(var i=0; i<arr.length; i++){
  console.log(arr[i])
}

//logical operators
console.log(true && false);

var a = 5;
var b = 6;
console.log(a === b);

//FL conditional statement
var myName = 'brian';

var yourName = 'not brian';

if(myName === yourName){
  console.log('same name!!!'); //if it is: do this
}else{
  console.log('try again');
}

var answer = prompt('What is your age?');
console.log(answer);

//write an if else statement:
//if the answer is your age
//console log 'WINNER'
//else console log 'TRY AGAIN'
var answer = prompt('What is your age?');
if(answer === '26'){
  console.log('WINNER')
}else{
  console.log('Try Again')
}
//console.log(typeof answer);

//exercises
var testOne = "What kind of variable am I?";//object
					var testTwo = 256; //number
 					var testThree = false; //bool
					var testFour = 'true'; //str bool
					var testFive = '128'; //str
					var testSix = ""; //str

          var testOne = "hello" + "there"; //
					var testTwo = "100" + 28;
					var testThree = true + 3; //bool
					var testFour = 'false' + 5; //str
					var testFive = '128' - 3; //str
					var testSix = "" * 9; //

          var string1 = "Hello, ";
					var string2 = "my name is ";
					var string3 = "Kingsley Pappagiorgio";
					var combinedStrings = string1 + string2 + string3;



//project
var yourAge = prompt('What is your age?');
if(answer === 26){
  console.log(answer * 12)
}else{
  console.log(answer * 365)
}


//on click week7
function changeColor(){
  console.log("working");
  //grab element
var div = getElementById("my-div");
//Do stuff to element
div.style.height = '400px';
div.style.width = '100px';
div.style.backgroundColor = 'green';
div.style.transition = '2s';
};

//Week7
(var i = 0; i<=100; i+5) {
  console.log(i)
}
//objects
var miata = {
  make: 'toyota',
  color: 'red',
  doors: 2
};

var fivePoint0 = {
  make: 'ford',
  color: 'black',
  doors: 2
  obj: {
    blah: 'blah',
    array: [
      [],
      [],
    ]
  }
  additionalInfo: ['old','lemon','doesnt work']
};

console.log(fivePoint0.make)

var apple = {
  make: 'iphone',
  color: 'red',
};

var dodge = {
  make: 'charger',
  color: 'black',
  doors: 4
};

console.log(apple.make); //or in brackets (apple['make'])
console.log(dodge.color);
