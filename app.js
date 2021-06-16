const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 9090;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/alarm', (req, res) => {
    res.send('open');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
