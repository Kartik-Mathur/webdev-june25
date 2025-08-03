let allDivs = document.querySelectorAll('div');
console.log(allDivs);

for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].onclick = (ev) => {
        console.log(ev.target)
    }
}