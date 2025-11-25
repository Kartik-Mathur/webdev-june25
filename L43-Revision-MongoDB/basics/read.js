// To find single document
db.marks.findOne({
    name: 'jai'
})

// To find multiple documents
db.marks.find({
    cgpa: 8.9
})
