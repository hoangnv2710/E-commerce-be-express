const multer = require('multer');
const path = require('path');

const storage1 = multer.diskStorage({
    destination: 'src/uploads/products',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const storage2 = multer.diskStorage({
    destination: 'src/uploads/users',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage1 });
const uploadUser = multer({ storage: storage2 });

module.exports = { uploadUser, upload };
