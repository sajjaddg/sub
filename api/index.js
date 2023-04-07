
//index.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

const PORT = 3000;


app.use(cors({ origin: '*' }));

app.use(async (req, res) => {
    const url = req.url
    const origin = 'https://marzban.bahooacademy.top:8443' + url
    const data = (await axios.get(origin, {
        headers: {
            accept: 'application/json'
        }
    })).data

    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});