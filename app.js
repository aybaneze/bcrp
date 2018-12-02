const fs = require('fs');
const express = require('express'),
    bodyParser = require('body-parser');
const cfenv = require('cfenv');
var base64Img = require('base64-img');
var port = process.env.PORT || 8081;

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const visualRecognition = new VisualRecognitionV3({
    version: '2018-11-30',
    iam_apikey: 'vG_HWBslc7c8b7TeSxztaDrcvASm0wB8BfUVqoB6ymok'
});

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post("/obtenerResultVR", function (req, response) {

    var imagenB64 = req.body.imagenB64;
    base64Img.img(imagenB64, '../img', 'image', function (err, filepath) {
        console.log("b64 to img file")
        var images_file = fs.createReadStream("../img/image.png");
        var params = {
            images_file: images_file,
            classifier_ids: ["soles_1574968460"]
        };
console.log("enviando img")
        visualRecognition.classify(params, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                // const data = JSON.stringify(res.images[0].classifiers[0].classes[0].score);
                response.json(res);
            }
        });

    })




});

app.listen(port);
console.log("Listening on port ", port);