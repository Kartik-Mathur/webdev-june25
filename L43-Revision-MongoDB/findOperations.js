// Ascending Order
db.marks.find().sort({ cgpa: 1 }).toArray()

// Descending Order
db.marks.find().sort({ cgpa: -1 }).toArray()

// Comparison Operator
db.marks.find({
    cgpa: {
        $gte: 8.0
    }
}).toArray()


db.marks.find({
    $and: [
        {
            cgpa: {
                $gte: 8
            }
        },
        {
            age: {
                $lte: 20
            }
        }
    ]
}).toArray()

// Count Documents

db.marks.find({
    $and: [
        {
            cgpa: {
                $gte: 8
            }
        },
        {
            age: {
                $lte: 20
            }
        }
    ]
})

// Count Documents
db.marks.countDocuments({
    age: {
        $gte: 22
    }
})

// Limit
db.marks.find({
    age: {
        $gte: 22
    }
}).limit(10)

db.marks.find({
    age: {
        $gte: 22
    }
}).skip(10).limit(10)