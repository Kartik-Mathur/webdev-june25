import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();
async function getOrCreateConversation(userAId, userBId) {
    const [a, b] = [userAId, userBId].sort();

    let conv = await prisma.directConversation.findUnique({
        where: {
            userAId_userBId: {
                userAId: a,
                userBId: b
            }
        }
    })

    if (!conv) {
        conv = await prisma.directConversation.create({
            data: {
                userAId: a,
                userBId: b
            }
        })
    }
    return conv || null;
}

export default function (socket, io) {
    socket.on("chat:send", async (payload, cb) => {

        try {
            const { receiverId, text } = payload;

            if (!receiverId || !text.trim()) return;

            console.log(receiverId, text);

            const userId = socket.user.id;
            console.log(userId)
            let conv = await getOrCreateConversation(userId, receiverId);

            let message = await prisma.message.create({
                data: {
                    conversationId: conv.id,
                    text,
                    senderId: userId
                },
                include: {
                    sender: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }
                }
            })

            io.to(`user:${userId}`).emit("chat:new", message);
            io.to(`user:${receiverId}`).emit("chat:new", message);

            cb?.({
                ok: true,
                message
            })

        } catch (error) {
            console.log(error)
            cb?.({
                ok: false,
                error
            })
        }
    })

}