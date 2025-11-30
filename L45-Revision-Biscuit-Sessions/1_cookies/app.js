const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
// const cookie = require('cookie');
const app = express();
const PORT = 4444;
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/signup', (req, res) => {
    let cookieData = {
        user: "Vikas",
        count: 1
    }

    res.cookie("data", JSON.stringify(cookieData), {
        httpOnly: true,
        maxAge: 60 * 60 * 24
    })
    // res.cookie("name", "Vikas", {
    //     httpOnly: true,
    //     maxAge: 60 * 60 * 24
    // })
    // res.setHeader(
    //     "Set-Cookie",
    //     cookie.stringifySetCookie({
    //         name: "name",
    //         value: "Vikas",
    //         httpOnly: true,
    //         maxAge: 60 * 60 * 24 * 7, // 1 week
    //     }),
    // );

    res.send("Welcome to website");
});

app.get('/login', (req, res) => {
    res.send("You Need to Login Before you access website");
})

app.get('/website', (req, res) => {
    // console.log(req.cookies.data)
    
    if (!req.cookies.data) {
        return res.redirect('/login');
    }

    let cookieData = JSON.parse(req.cookies.data);
    console.log(cookieData)
    cookieData.count++;
    res.cookie("data", JSON.stringify(cookieData), {
        httpOnly: true,
        maxAge: 60 * 60 * 24
    })
    res.send(`Hello Welcome to the website: ${cookieData.user} - Your Visit Count: ${cookieData.count}`);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});