import axios from "axios";
import http from 'http';

const handler = async (req, res) => {
    const url = req.url
    const origin = 'https://marzban.bahooacademy.top:8443' + url
    const data = (await axios.get(origin, {
        headers: {
            accept: 'application/json'
        }
    })).data

    res.end(data);
}

http.createServer(handler).listen(3000)