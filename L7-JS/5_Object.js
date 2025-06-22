let obj = {
    a: 1, // key: value
    b: true,
    c: [1, 2, 3, 4],
    '': 'Empty String',
    ' ': 'I am a Space Keys Value',
    'Hello World': "Learning Strings"
}

console.log(obj);
console.log(obj.c);
console.log(obj['Hello World']);
console.log(obj["c"]);
console.log(obj['']);
console.log(obj[' ']);

for (let i = 0; i < obj.c.length; i++) {
    console.log(obj.c[i]);
}