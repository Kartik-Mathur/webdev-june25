// LINK: https://www.mongodb.com/docs/manual/reference/mql/query-predicates/#std-label-query-selectors
// 1. Find all students between age 5 to 7
db.students.find({
    age: {
        $in: [5,6,7]
    }
})

// 2. to get all data
db.students.find({
    age: {
        $in: [5,6,7]
    }
}).toArray();

// 3. Add city: 'Delhi' to every student document
db.students.updateMany(
    {},
    {
        $set: {
            city: 'Delhi'
        }
    }
)

db.students.updateMany(
    {
        age: {
            $in: [5,7]
        }
    },
    {
        $set: {
            city: 'Banglore'
        }
    }
)

// Find students in banglore and sort them
// according to their ages...
