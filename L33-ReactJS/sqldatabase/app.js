const path = require('path');
const express = require('express');
const { PrismaClient } = require('./generated/prisma');

const prisma = new PrismaClient();
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/user', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    let newUser = await prisma.user.create({
        data: {
            username,
            password
        }
    })

    res.status(200).json({
        newUser
    })
})
app.get('/users', async (req, res) => {
    let allUsers = await prisma.user.findMany();
    res.status(200).json({
        allUsers
    })

})
app.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    let user = await prisma.user.findFirst({
        where: {
            id: Number(id)
        }
    });

    res.status(200).json({
        user
    })
})

app.delete('/user/:id', async (req, res) => {
    const { id } = req.params;

    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    })

    res.status(200).json({
        message: "Delete success"
    })
})

app.patch('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;

    let existingUser = await prisma.user.findFirst({
        where: {
            id: +id
        }
    })

    if (!existingUser) return res.status(401).json({
        message: 'User doesnot exist'
    })

    await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            email
        }
    })

    res.status(200).json({
        message: 'User update success'
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});