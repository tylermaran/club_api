const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('./awsconfig');

const fileFilter = (req, file, cb) => {
  // accept an incoming file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/tiff') {
    cb(null, true);
  } else {
    req.fileValidationError = 'Thats not a damn picture! Try something else';
    return cb(null, false, new Error('Thats not a damn picture! Try something else'));
  }
};

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'clubfinder',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-').substring(0, 10) + '-' + file.originalname);
    }
  }),
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})

module.exports = upload;