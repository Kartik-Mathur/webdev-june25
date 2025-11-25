// $set: To update
db.marks.updateOne({
    name: "divyanshu"
}, {
    $set: {
        age: 210
    }
})

db.marks.findOne({
    name: 'divyanshu'
})

// $inc: To increase the value
db.marks.updateOne({
    name: "divyanshu"
}, {
    $inc: {
        cgpa: 1
    }
})

// $unset: Removes the property
db.marks.updateOne({
    name: "divyanshu"
}, {
    $unset: {
        age: ""
    }
})


// $push: Adds an item to an array.
// Lets insert an Array first
db.marks.updateOne({
    name: "divyanshu"
}, {
    $set: {
        hobbies: ["cricket", "dance", "sing"]
    }
})

db.marks.updateOne({
    name: "divyanshu"
}, {
    $push: {
        hobbies: "chess"
    }
})



// $pop: Removes the first or last item of an array.
db.marks.updateOne({
    name: "divyanshu"
}, {
    $pop: {
        hobbies: 1
    }
})

// $pull: Removes all array elements that match a specified query.
// Lets insert multiple values inside hobbies as chess
db.marks.updateOne({
    name: "divyanshu"
}, {
    $push: {
        hobbies: "chess"
    }
})

db.marks.updateOne({
    name: "divyanshu"
}, {
    $push: {
        hobbies: "chess"
    }
})

db.marks.updateOne({
    name: "divyanshu"
}, {
    $push: {
        hobbies: "chess"
    }
})

// It will remove all the values chess from hobbies array
db.marks.updateOne({
    name: "divyanshu"
}, {
    $pull: {
        hobbies: "chess"
    }
})
