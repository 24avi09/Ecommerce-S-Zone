const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const { default: mongoose } = require('mongoose');
const multer = require('multer')
const app = express();

app.use(bodyParser.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://abhi03:UQkqPECmlouMcNjb@cluster1.kwsn7az.mongodb.net/project-ECommerce", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is Connected."))
    .catch(error => console.log(error))

app.use('/', route)

app.use(function (req, res) {
    return res.status(400).send({ status: false, msg: "Path not Found." })
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express App Running on Port: ' + (process.env.PORT || 3000))
});