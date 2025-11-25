// DROP THE EXISTING COLLECTION
db.marks.drop();

// CREATE COLLECTION marks again
db.createCollection('marks', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'cgpa'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: "name must be a string and is required"
                },
                cgpa: {
                    bsonType: 'number',
                    description: "cgpa must be a number and is required"
                }
            }
        }
    }
})

// Incorrect insertions:
db.marks.insertOne({
    name: 'jai',
    cgpa: '8.1'
});

db.marks.insertOne({
    name: 'jai'
});

// Correct insertion
db.marks.insertOne({
    name: 'jai',
    cgpa: 8.1
});

db.marks.insertOne({
    name: 'jai',
    cgpa: 8.1,
    address: 'Delhi'
});