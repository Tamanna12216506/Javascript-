// let a = "I am global variable ";

// function example(){
//     if(true){
//     let a = "I am local variable ";
//     console.log(a);
//     }
// }
// example();
// console.log(a);

// console.log(x);  // hoisting when we declare later but use the variable earlier hoisting happening with var ,let as well as with const
// let x = 5;       // for var it shows undefine
// console.log(x);

///hoisting with function
// hello();   ////function called earlier while it declare later on 
// function hello(){
//     console.log("Hello World");
// }

////DIFFERENT DATATYPES
///PRIMITIVE DATATYPE
//1. STRING
// let ne="Tamanna";
// console.log(typeof(ne));

// //2.NUMBER
// let a=19;
// console.log(typeof(a));

// //3.BOOLEAN
// let ab=true;
// console.log(typeof(ab));

// //4.UNDEFINED
// let undefinedvar;
// console.log(typeof(undefinedvar));

// //5.NULL
// let abc=null;
// console.log(typeof(abc));

// ///OBJECT DATATYPE
// //A.OBJECT = collection of key value pairs.
// let per={
//     name:"Tanu",
//     age: 19,
//     isstudent:false
// };
// console.log(per);
// console.log(per.name);

// //B.ARRAY= access by index
// let fruits = [1,3,"dfu","jfhu"];
// console.log(fruits[0]);

// //C.FUNCTION= reusable code , can take parameter and have return value
// function add(a,b){
//     return a+b;
// }
// let b = add(2,3);
// console.log(b);


/////Working with loops
// for loop == exceute block code for specific time
// for(i=0;i<5;i++){
//     console.log(i);
// }
// while loop == repeat block of code while specific condition is true. this loop also know as entry control loop
// let count=0;
// while(count<5){
//     console.log(count);
//     count++;
// }
// do while loop  //exit control loop == atleast excute one time then check the condition 
// let count = 0;
// do{
//     console.log(count);
//     count++;
// }while(count<4);

//for...in Loop == iterates over properties of object
// let person = { name: "Tamanna",age: 30,occupation:"Developer"};
// for(let key in person){
//     console.log(key + ":" + person[key]);
// }

/// object literal notation
///anamous function = a function without name
// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year : 2022,
//     isElectric : false,
//     start:function(){
//         console.log("Engine started!");
//     }
// }
// console.log(car.make);  //Accessing properties
// car.start();           // calling a method(function)

/// Object constructor function
// function Book(title,author,year){
//     this.title=title;    //using this refers to object
//     this.author = author;
//     this.year = year;
// }
// //creating instances of object
// let book1 = new Book("the catcher in the rye","J.D.Salinger",1951);
// let book2 = new Book("to kill a mockingbird","Harpe Lee",1960);
// console.log(book1.title);
// console.log(book2.title);
// console.log(book1.author);

///working on array
// let fruits = ["apple","banana",21,"orange",3.11];
// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[4]);

// ///adding element to end
// fruits.push("kiwi");
// console.log(fruits);
// ///adding element in beginning
// fruits.unshift("mango");
// console.log(fruits);
// /// removing last element
// let removedlast = fruits.pop();
// ///removing the first element
// let removedFirst = fruits.shift();
// console.log(fruits);
// ///finding index of an element
// let indexOfOrange = fruits.indexOf("orange");
// console.log(indexOfOrange);
// /// iteration using for loop
// for(let i =0;i < fruits.length;i++){
//     console.log(fruits[i]);
// }
// /// Slicing an array
// let citrus = fruits.slice(1,3);
// console.log(citrus);

// ////splicing an array( adding element in specific position by removing element at that position)  modifying an array
// let removed =fruits.splice(1,2,"pear","melon");
// console.log(fruits);

// ///concatenating arrays
// let moreFruits = ["grapefruit","pineapple"];
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits);

////Function Expression   ///in let and const during hosting we get refrence error
// const multiply = function(a,b){
    // return a* b;
// }
// const product = multiply(4,6);
// console.log('Functin Expression - Product:',product);

///Arrow function
// const subtract = (a,b) => a-b;       //for multiple statement we use curly braces
// const difference = subtract(8,3);
// console.log('Arrow Function - Difference:',difference);

// ///TYPE COERCION
// let result = 5+"5";  ////when a string added to no. it concatenate
// console.log(result);
// let ab = "2"+"2"-"2";
// console.log(ab);

//ERROR HANDLING
// try{
//     //cade that may throe error
//     throw new Error("An error");
// }catch(error){
//     //code to handle error
//     console.error(error.message);
// }finally{
//     //code that will run regardless of whether there was an error or not
//     console.log("cleanup code");
// }

////COMAPRISION OPERATOR
// let a=10;
// let b=5;
// console.log(a === b);  ////(===) is use to comapre not only value also the the data type    //// php also have same operators

////LOGICAL OPERATORS
// let p= true;
// let q = false;
// console.log(p && q); // and operator
// console.log(!p);  // not operator
// console.log(p || q);  // or operator
