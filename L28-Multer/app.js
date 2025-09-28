const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(express.urlencoded({ extended: true }));

app.post('/image', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.status(200).json({
        message: 'Image uploaded successfully'
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});