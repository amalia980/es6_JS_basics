/*=====================foreach=====================*/

const fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit) => {
    console.log(fruit);
})

console.log("//----------------------//")
/*======================map=======================*/

const colors = ["purple", "blue", "red"];

const myColors = colors.map((color) => {
    return color.toUpperCase();
});

console.log(colors, myColors)

/*===============================================*/

const names = [
    { firstname: "Peter", lastname: "Parker", gender: "Male"},
    { firstname: "Lucy", lastname: "Daniels", gender: "Female"},
    { firstname: "Sarah", lastname: "Jackson", gender: "Female"},
    { firstname: "Michael", lastname: "Decker", gender: "Male"}
];

document.querySelector("#name-list").innerHTML = names
.map((name) => `<p>${name.firstname} ${name.lastname}</p>`)
.join("");

/*==================filter======================*/

//filter out from the names array

const maleNames = names.filter((name) => name.gender === "Male");

const femaleNames = names.filter((name) => name.gender === "Female");

    document.querySelector("#male").innerHTML = maleNames
        .map((name) => `<div><p>${name.firstname}</p></div>`)
        .join("");

        document.querySelector("#female").innerHTML = femaleNames
        .map((name) => `<div><p>${name.firstname}</p></div>`)
        .join("");

//another filter. log out the array without the burger

const foods = ["burger", "pizza", "fries"];

const myFoods = foods.filter((food) => food !== "burger");

console.log(foods, myFoods);

/*==============================some()=============================*/

const planets = ["Mercury", "Venus", "Jupiter", "Mars"];

const result = planets.some((planet) => planet === "pluto");

console.log(result);

const checkPlanet = (passedPlanet) => {
  if (planets.some((planet) => planet === passedPlanet)) {
    alert("That planet exists!");
  } else {
    alert("That planet doesn't exsist!");
  }
};

checkPlanet("Venus");