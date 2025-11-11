import { PrismaClient } from '@prisma/client';
import express from 'express';
const app = express();
const PORT = 4444;
let prisma = new PrismaClient();

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/student', async (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email) {
        return res.json({
            message: "Invalid Paylod"
        });
    }
    let student = await prisma.student.create({
        data: {
            name,
            age: +age,
            email
        }
    })

    res.status(200).json({
        student
    })
})
app.get('/students', async (req, res) => {
    const { email } = req.query;
    let student = await prisma.student.findUnique({
        where: {
            email
        }
    })

    res.status(200).json(student);
})

app.post('/add-language', async (req, res) => {
    const { studentId, name } = req.body;
    let language = await prisma.language.create({
        data: {
            studentId,
            name
        }
    })

    res.json(language)
})

app.get('/student', async (req, res) => {
    const { id } = req.query;

    let student = await prisma.student.findUnique({
        where: {
            id
        },
        include: {
            languages: {
                select: {
                    name: true
                }
            }
        }
    })

    res.json(student);
})

// app.put('/student', (req, res) => {

// })

app.delete('/student', async (req, res) => {
    const { id } = req.body;
    await prisma.student.delete({
        where: {
            id
        }
    })
    res.json("DELETED SUCCESS");
})

app.post('/addplayer', async (req, res) => {
    const { name } = req.body;
    let player = await prisma.players.create({
        data: {
            name
        }
    })
    res.json(player);
})

app.post('/addsport', async (req, res) => {
    const { name } = req.body;
    let sport = await prisma.sports.create({
        data: {
            name
        }
    })
    res.json(sport);
})

app.post('/addgame', async (req, res) => {
    const { playerId, sportsId } = req.body;
    let game = await prisma.allSports.create({
        data: {
            playerId,
            sportsId
        }
    })

    res.json(game);
})

app.get('/player-games', async (req, res) => {
    const { playerId } = req.query;
    let allGames = await prisma.allSports.findMany({
        where: {
            playerId
        },
        include: {
            sports: {
                select: {
                    name: true
                }
            }
        }
    })
    res.json(allGames);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
}); 