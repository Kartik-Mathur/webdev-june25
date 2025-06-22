let url = 'https://codingblocks.com/dsa/cpp';

// Convert the given url to following object
/*
    {
        'codingblocks':{
            'dsa': [cpp]
        }
    }
*/

// Split the string
let x = url.split('/');
// console.log(x);

let courseName = x.pop();
let courseCategory = x.pop();
let companyDomain = x.pop();

let companyName = companyDomain.split('.').shift();


// console.log(courseName);
// console.log(courseCategory);
// console.log(companyName);


let obj = {}

if (!obj[companyName]) {
    obj[companyName] = {}
}


/*
    obj: {
        'codingblocks':{
        }
    }
*/
console.log(obj)
// obj = {
//     'codingblocks': {
//         'dsa': ['Java', 'Python']
//     }
// }
if (!obj[companyName][courseCategory]) {
    obj[companyName][courseCategory] = [courseName]
}
else {
    obj[companyName][courseCategory].push(courseName);
}

console.log(obj)