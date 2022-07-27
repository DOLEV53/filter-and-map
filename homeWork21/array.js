

let menyCars = [];

let id_input = document.getElementById("id_input");

car_1 = {

    name: "mazda",
    color: "blue",
    age: 12,

};



car_2 = {

    name: "fiat",
    color: "red",
    age: 8,

};

car_3 = {

    name: "bmw",
    color: "green",
    age: 16,

};

car_4 = {

    name: "reno",
    color: "black",
    age: 5,

};

menyCars.push(car_1,car_2,car_3,car_4);

let addValue = () => {

let maxAge = menyCars.filter((car) => car.age < id_input.value);
let display = document.getElementById("display");

maxAge.map((item) => {

display.innerHTML += `
<div>
 <div>car name is : ${item.name}</div>
  <div>car color is : ${item.color}</div>
  <div>car age is : ${item.age}</div>
</div>

`;

})

id_input.value = " ";

}


