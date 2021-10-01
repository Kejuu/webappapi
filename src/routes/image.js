const { Router } = require('express');
const  fs  = require('fs');
const router = Router();
const path = require('path');
let images=[];

//////////////////////////
//////    /GETS      //////      
//////////////////////////


//MAIN PAGE
router.get('/', (req, res) => {
    res.send('Welcome to my API POG');

});

//Upload Page
router.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/upload.html'));
});

//GET: Json con http://localhost:8080/path de cada imagen
router.get('/images', (req, res) => {
    images = fs.readdirSync("C:/Users/Kevin/Documents/webappdecimo/src/images");
    images.forEach(function (item, index) {
        images[index] = "http://localhost:8080/" + item;
    });
    console.log(images);
    let imagesjson = JSON.stringify(images);
    console.log(imagesjson);
    res.send(images);
});


//////////////////////////
//////    /POSTS    //////      
//////////////////////////

//POST: Obtiene el archivo enviado.
router.post('/upload', (req, res) => {  
    console.log(req.file);
    res.send('uploaded');

});

//Not implement
router.post('/images/:id/', (req, res) => {
    res.send('deleted');
});

//Not implement
router.post('/images/:id/delete', (req, res) => {
    res.send('deleted');
});

module.exports = router; 