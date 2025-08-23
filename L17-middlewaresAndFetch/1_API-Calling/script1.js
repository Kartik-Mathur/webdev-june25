// Fetch
let btn = document.querySelector('button');
let URL = 'https://meowfacts.herokuapp.com/';

function loadData(arr){
    let ul = document.querySelector('ul');
    ul.innerText = ''; // Pehle ka data hatao

    arr.forEach((d)=>{
        let li = document.createElement('li');
        li.innerText=d;
        ul.appendChild(li);
    })
}

function getData(URL) {
    // Fetch returns a promise
    fetch(URL)
        .then((res) => res.json())
        .then(({ data }) => {
            console.log(data);
            loadData(data);
        })
        .catch(err => {
            console.log(err);
        })
}


btn.onclick = () => {
    // console.log("Button Clicked");
    getData(URL);
}