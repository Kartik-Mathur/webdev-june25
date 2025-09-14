db.createCollection('students');

db.students.insertOne({
    name: 'Pushkar',
    age: 5
});

db.students.insertMany([
    {name: 'vikas', age:3},
    {name: 'ankit', age:5}
])

db.students.find({});

db.students.find({
    age: 7
})

db.students.find({
    age: 7
}).toArray()
