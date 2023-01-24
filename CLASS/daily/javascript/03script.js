
document.write("this is in BODY");

document.write("<br>")

console.log("this is console...");

document.getElementById('para').innerHTML ='this is para';

console.log(document.getElementById('para'));
/*

variable/identifier : to store some values

3 ways to declare a variable;

1. var (Global and Default)
2. let (scope related)
3. const

Rules:

1. it can not start with number (ex. 5x,7e)
2. it cant be keywords

*/

// var switch1 =34; // declaration/ assign / intianlize 
// var switch1= 45; // re-declaration ALLOWED

// switch1 =90;     // re-assignment ALLOWED

// document.write(switch1);


//let x1 =34; // declaration/ assign / intianlize 
//let x1= 45; // re-declaration NOT ALLOWED

//x1 =90;     // re-assignment ALLOWED

//document.write(x1);

const switch1 =34; // declaration/ assign / intianlize 
//const switch1= 45; // re-declaration ALLOWED

//switch1 =90;     // re-assignment ALLOWED

document.write(switch1);