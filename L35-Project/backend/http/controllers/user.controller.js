import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();
export async function getFriends(req, res, next) {
    // const {userId} = req.params;
    let allFriends = await prisma.directConversation.findMany({
        where: {
            OR: [
                { userAId: req.user.id },
                { userBId: req.user.id },
            ]
        },
        include: {
            userA: { select: { id: true, name: true, email: true } },
            userB: { select: { id: true, name: true, email: true } }
        }
    })

    res.status(200).json(allFriends)
}

export async function getMessages(req, res, next) {
    try {
        const { conversationId } = req.query;
        console.log(conversationId)
        let allMessages = await prisma.message.findMany({
            where: {
                conversationId: conversationId
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
        res.status(200).json(allMessages);
    } catch (error) {
        console.log(error)
    }

}