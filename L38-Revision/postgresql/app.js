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

app.put('/student', (req, res) => { })

app.delete('/student', (req, res) => { })

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});