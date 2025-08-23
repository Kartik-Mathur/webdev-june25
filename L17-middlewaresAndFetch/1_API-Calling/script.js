// Fetch
let btn = document.querySelector('button');
let MEOW_URL = 'https://meowfacts.herokuapp.com/';

function loadData(arr) {
    let ul = document.querySelector('ul');
    ul.innerText = ''; // Pehle ka data hatao

    arr.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        ul.appendChild(li);
    })
}

async function getData(MEOW_URL) {
    try {
        let { data: {data} } = await axios.get(MEOW_URL);
        // data = data.data;
        // console.log(data);

        loadData(data);
    } catch (error) {
        alert(error.message);
    }
}


btn.onclick = () => {
    // console.log("Button Clicked");
    getData(MEOW_URL);

}