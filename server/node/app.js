const express = require('express');
//Routes
const searchRouter = require("./routes/search.js");
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

app.use('/search', searchRouter);
app.use('/locations', locationsRouter);

app.get('/', (req, res) => res.sendFile('index.html', { root: publicRoot }));

app.listen(8080, (x) => console.log(`Running now on port ${ PORT } `));