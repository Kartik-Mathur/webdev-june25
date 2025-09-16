function student() {
    let student = 'Himanshu';
    let marks = 100;

    return function printData() {
        console.log("Name", student);
        console.log("Marks", marks);
    }
}

let x = student();
x();