const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path")
const User = require('./router/User')

const Authentication = require('./router/Users/Authentication')
const app = express();
// require('./router/Users/Authentication')(app);
require('dotenv').config()
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

const apiPort = 3000

app.use(bodyParser.json())

app.listen(apiPort, () => {
    console.log('server run', apiPort)
    console.log(process.env.NODE_ENV)
})
app.use('/Auth', Authentication)
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/supernebr`);
const root = require('path').join(__dirname,  "../nebr", "build")
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
// if (process.env.NODE_ENV === "production") {
//     console.log('prodcution')
//     app.get("*", (req, res) => {
//         res.sendFile('index.html', { root });
//     })
// }
