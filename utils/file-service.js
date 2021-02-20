const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: process.env.AWS_BUCKET_NAME,
        metadata: (req, file, cb) => {
            let fieldName = file.fieldname;
            if (req.generateName) {
                fieldName = new Date().getTime();
            }
            cb(null, { fieldName });
        },
        key: (req, file, cb) => {
            const fieldName = Date.now().toString() + '-' + file.originalname;
            cb(null, fieldName);
        },
    }),
});

const destroy = (path) => {
    const params = {
        bucket: process.env.AWS_BUCKET_NAME,
        key: path,
    };

    s3.deleteObject(params, (err, data) => {
        if (!err) {
            return data;
        }
        return err;
    });
};

module.exports = {
    upload,
    destroy,
};
