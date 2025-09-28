// Customisation in multer 
const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
app.use(express.urlencoded({ extended: true }));
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension)
    }
})

const upload = multer({ storage: storage })

app.post('/image', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.status(200).json({
        message: 'Image uploaded successfully'
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});