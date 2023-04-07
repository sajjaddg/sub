// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    const token = req.query.token;
    const origin = 'https://marzban.bahooacademy.top:8443/sub/' + token
    const data = (await axios.get(origin, {
        headers: {
            accept: 'application/json'
        }
    })).data

    res.send(data);
}
