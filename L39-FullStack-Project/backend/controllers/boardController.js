const Board = require("../models/boardModel");

module.exports.createBoard = async function (req, res, next) {
    try {
        const { title, ownerId, elements } = req.body;
       
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const board = await Board.create({
            title,
            ownerId: ownerId || null,
            elements: elements || [],
        });
        console.log(board);
        return res.status(201).json(board);
    } catch (err) {
        console.error("Error creating board:", err);
        return res.status(500).json({ message: "Server error" });
    }
}

module.exports.getBoard = async function (req, res, next) {
    try {
        const { boardId } = req.params;

        if (!boardId) {
            return res.status(400).json({ message: "BoardId is required" });
        }

        const board = await Board.findOne({
            _id: boardId,
        });

        return res.status(201).json(board);
    } catch (err) {
        console.error("Error getting board:", err);
        return res.status(500).json({ message: "Server error" });
    }
}