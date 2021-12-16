
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num);

console.log(sum);

//shopping cart reduce

const basket = [
    {name: "Chips", price: 20},
    {name: "Mango", price: 13},
    {name: "Chocolate", price: 27},
    {name: "Chicken", price: 45},
];

document.querySelector("#products").innerHTML = basket
    .map(
        (product) => 
        `
        <div class="wrapper">
        <p><b>${product.name}:</b>
        ${product.price} :-</p>
        </div>
        `
        )
        .join("");

    const productPrices = basket.map((product) => product.price);

    document.querySelector("#total-price").innerHTML = `${productPrices.reduce((totalPrice, price) =>  totalPrice + price)} kr`;

    /*=====================some()======================*/

    const veggies = ["carrot", "potatoe", "cucumber", "lettuce"];

    const myResult = veggies.some((check) => check === "pineapple");
    console.log(myResult);//its false, there is not pineapple in the array

    const res = veggies.some((check) => check === "carrot");
    console.log(res);