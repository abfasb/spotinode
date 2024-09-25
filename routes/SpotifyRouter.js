const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const songsController = require('../controllers/songsController');
const uploadController = require('../controllers/uploadController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get('/songs', songsController.getAllSongs);
router.get('/search', songsController.searchSong);
router.get('/play/:id', songsController.playSong);

// Upload routes
router.get('/upload', uploadController.showUploadForm);
router.post('/upload', upload.single('song'), uploadController.uploadSong);

module.exports = router;
