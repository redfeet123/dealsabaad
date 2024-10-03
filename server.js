const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });


app.post('/submit', upload.array('images[]', 10), (req, res) => {
    const formData = req.body;
    const files = req.files;
    
    console.log('Form Data:', formData);
    console.log('Uploaded Files:', files);

    res.send('Form submitted successfully.');
});


const fs = require('fs');
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
