let print = () => {
    console.log(this);
}

let person = {
    name: 'Vikas'
}

let person1 = {
    name: 'Aryan'
}

print.call(person);
print.call(person1);
