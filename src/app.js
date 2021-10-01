const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require("cors");

// Inicializaciones
const app = express();

// Config
app.set('port', process.env.PORT || 3001);

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: 'C:/Users/Kevin/Documents/webappdecimo/src/images',
    filename: (req, file, cb, filename) =>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
app.use(multer({ storage: storage }).single('image'));


//Routes
app.use(require('./routes/image'))
//static files
app.use(express.static("C:/Users/Kevin/Documents/webappdecimo/src/images"))

//Starting server

app.listen(app.get('port'), () =>{
    console.log(`Inicializando API en http://localhost:${app.get('port')}`);
});