const mongoose = require("mongoose");

const ElementSchema = new mongoose.Schema(
    {
        type: { type: String, required: true },
        x: Number,
        y: Number,
        width: Number,
        height: Number,
        strokeColor: { type: String, default: "#000000" },
        fillColor: { type: String, default: "transparent" },
        strokeWidth: { type: Number, default: 2 },
        points: [
            {
                x: Number,
                y: Number,
            }
        ],
        text: String,
    }
);

const BoardSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        ownerId: { type: String },
        elements: {
            type: [ElementSchema],
            default: [],
        }
    },
    { timestamps: true }
);

const Board = mongoose.model("Board", BoardSchema);
module.exports = Board;