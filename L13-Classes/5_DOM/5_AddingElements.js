let ul = document.querySelector('ul');

console.log(ul)

// let item = '<li class="movie">Thor</li>'

// setTimeout(()=>{
//     ul.innerHTML += item // O(N) time
// },3000)

let li = document.createElement('li');
console.log(li)

li.innerText = 'Thor';
console.log(li)

li.classList.add('movie');
console.log(li)

setTimeout(()=>{
    ul.appendChild(li); // O(1)
},3000)
