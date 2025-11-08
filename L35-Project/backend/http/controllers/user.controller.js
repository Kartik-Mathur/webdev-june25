import { PrismaClient } from "@prisma/client";
let prisma= new PrismaClient();
export async function getFriends(req, res, next) {
    // const {userId} = req.params;
    let allFriends = await prisma.directConversation.findMany({
        where:{
            OR:[
                {userAId: req.user.id},
                {userBId: req.user.id},
            ]
        },
        select:{
            
        }
    })

    console.log(allFriends);
}