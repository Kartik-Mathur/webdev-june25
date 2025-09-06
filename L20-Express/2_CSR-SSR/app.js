const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    // we are inside the views folder, and which file do we need to send.
    res.render('index', {
        title: 'MyTodo App',
        arr: [1, 2, 3, 4, 5, 6]
    });
})



app.listen(PORT);