const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
require('dotenv').config();

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret
});

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
    cloudinary.uploader
        .upload(req.file.path)
        .then(result => {
            console.log(result)
            res.status(200).json({
                message: 'Image uploaded successfully',
                result
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Unable to upload image',
                err
            })
        })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});