import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

export default mongoose.model('todos', todoSchema);