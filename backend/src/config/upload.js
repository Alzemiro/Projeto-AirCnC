const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req, file, cb) => {
            //serve para definir o uso de metodos na definição do nome do arquivo
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext)
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};