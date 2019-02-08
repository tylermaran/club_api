const express = require("express");
const router = express.Router();
const upload = require('../middleware/imageconfig');

const singleUpload = upload.single('image')

router.post('/image-upload', function (req, res) {
    singleUpload(req, res, function (err, some) {
        // Catch most errors
        if (err) {
            console.log(err);
            return res.status(422).send({
                errors: [{
                    title: 'Image Upload Error',
                    detail: err.message
                }]
            });
        }
        // Catch file validation errors
        if (req.fileValidationError) {
            return res.end(res.json({
                message: req.fileValidationError
            }));
        }
        // Success Case
        return res.json({
            'imageUrl': req.file.location
        });
    });
});

module.exports = router;