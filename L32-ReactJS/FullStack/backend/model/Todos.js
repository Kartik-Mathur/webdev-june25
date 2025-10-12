import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: true,
    }
})

export default mongoose.model('todos', todoSchema);