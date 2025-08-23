// Fetch
let btn = document.querySelector('button');
let URL = 'https://meowfacts.herokuapp.com/';

function loadData(arr) {
    let ul = document.querySelector('ul');
    ul.innerText = ''; // Pehle ka data hatao

    arr.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        ul.appendChild(li);
    })
}

async function getData(URL) {
    try {
        let res = await fetch(URL); // This will wait jab tak fetch
        // data return nhi krta
        let { data } = await res.json();
        loadData(data);
    } catch (error) {
        alert(error.message);
    }
}


btn.onclick = () => {
    // console.log("Button Clicked");
    getData(URL);
    console.log("HELLOO");
}