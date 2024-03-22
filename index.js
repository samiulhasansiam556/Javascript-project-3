
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');

var p1 = document.getElementById('p1');
 

var button1 = document.getElementById('button1');

var value1;

button1.addEventListener("click", function(){
    
     value1 = 0.5 * input1.value * input2.value ;
    p1.innerHTML = "<b>Area<b> " + value1 + " cm<sup>2</sup>";

});

var input21 = document.getElementById('input21');
var input22 = document.getElementById('input22');

var p2 = document.getElementById('p2');
 

var button2 = document.getElementById('button2');

var value2;

button2.addEventListener("click", function(){
    
     value2 = input21.value * input22.value ;
    p2.innerHTML = "<b>Area<b> " + value2 + " cm<sup>2</sup>";

});

var input31 = document.getElementById('input31');
var input32 = document.getElementById('input32');

var p3 = document.getElementById('p3');
 

var button3 = document.getElementById('button3');

var value3;

button3.addEventListener("click", function(){
    
     value3 =  input31.value * input32.value ;
    p3.innerHTML = "<b>Area<b> " + value3 + " cm<sup>2</sup>";

});

// var input1 = document.getElementById('input1');
// var input2 = document.getElementById('input2');
// var p1 = document.getElementById('p1');
// var button1 = document.getElementById('button1');
// var value1;

// button1.addEventListener("click", function(){
//     value1 = 0.5 * input1.value * input2.value;
//     p1.innerHTML = "Result: " + value1;  // Use value1 instead of value
// });
