const Board = require("../models/boardModel");

export async function postCreateBoard(req, res, next) {
    const { boardId } = req.body;
    let board = await Board.findOne({
        _id: boardId || ""
    })
    if (!board) {
        board = await Board.create({
            title: 'demo-board',
            ownerId: "1"
        })
    }
    return board;
}