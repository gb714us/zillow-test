const express = require('express');
//Routes
const searchRouter = require("./routes/search.js");
const app = express();


//default + middleware
app.disable('X-Powered-By');
app.use(express.static('../../public'));
app.use('/search', searchRouter);




app.get('/', (req, res) => res.send('Hello World'));

app.listen(8080, function(){
    console.log("Running now on port..." + this.address().port);
});