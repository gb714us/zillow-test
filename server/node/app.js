const express = require('express');
//Routes
const locationsRouter = require("./routes/locations.js");
const path = require("path");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();

const PORT = process.env.PORT || 8080;
let publicRoot = path.resolve(__dirname, '../../public');

//default + middleware
app.disable('X-Powered-By');
app.use(helmet());
app.use(express.static(publicRoot));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(publicRoot);

//all routes
app.use('/locations', locationsRouter);

//index
app.get('/', (req, res) => res.sendFile('index.html', { root: publicRoot }));

module.exports = function(){
    app.listen(PORT, (x) => console.log(`Running now on port ${ PORT } `))
}
