const api = "https://swapi.py4e.com/api/planets/3/";

async function getApi(api) {
    const res = await fetch(api);

    let data = await res.json();
    console.log(data);
}

getApi();

function display(data) {
    let msg = `<p></p>`

    for (let myData of data) {
        msg += `<p>${myData.name}</p>`
    }

    document.getElementById("show").innerHTML = msg;
}