export default function (socket, io) {

    io.to(`user:${socket.id}`).emit("chat:", message);
    // io.to(`user:${receiverId}`).emit();
}