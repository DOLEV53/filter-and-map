"use strict"


let newCars = [
 {name: "mazda", color: "red", age: 5},
 {name: "bmw", color: "green", age: 7},
 {name: "fiat", color: "black", age: 14},
 {name: "dacia", color: "white", age: 2},
 {name: "honda", color: "yellow", age: 11},

]




let cars = [];

let cName = document.getElementById("name");
let cColor = document.getElementById("color");
let cAge = document.getElementById("age");

let addCars = () => {

 let  carName = cName.value;
 let  carColor = cColor.value;
 let  carAge = cAge.value;

 let obj = {

 name: carName,
 color: carColor,
 age: carAge,

 }   
 
 cars.push(obj);
 cName.value = "";
 cColor.value = "";
 cAge.value = "";


};



let maxAge = document.getElementById("maxAge");
let display = document.getElementById("dispaly");

let displayCars = () => {
  let selectCars = newCars.filter((car) => car.age < maxAge.value);
 
    selectCars.map((item) => {
    display.innerHTML += `
  <div>
  <div>Car name is : ${item.name}</div>
  <div>Car color is : ${item.color}</div>
  <div>Car age is : ${item.age}</div>
</div>
  `;
  });
};