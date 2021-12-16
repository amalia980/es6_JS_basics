//arrow functions

const greeting  = (x, y) => {
    return x + y;
}

console.log(greeting(2, 3));

/*arrow functions VS regular functios referring to "this"*/
class Message {
    constructor() {
        this.phrase = "Hi";
    }
    //regular function
    logThis() {
        console.log(this)
    }
}



const msg = new Message();

const btn1 = document.createElement("button");
btn1.innerHTML = "Click me";

btn1.setAttribute("id", "btn1");
document.body.append(btn1);

window.addEventListener("load", () => {
    msg.logThis();
    document.querySelector("#btn1").addEventListener("click", msg.logThis);
});