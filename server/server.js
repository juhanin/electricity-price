const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    fetch("https://api.porssisahko.net/v1/latest-prices.json")
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => console.log(error));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});