// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
  const url = req.url.split('/').slice(2).join('/')
  const origin = 'https://marzban.bahooacademy.top:8443' + url
  return res.send(origin)
  const data = (await axios.get(origin, {
    headers: {
      accept: 'application/json'
    }
  })).data

  res.send(data);
}
