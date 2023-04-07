// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
  return res.send('test done')
  const url = req.url.split('/').slice(2).join('/')
  const origin = 'https://marzban.bahooacademy.top:8443' + url
  const data = (await axios.get(origin, {
    headers: {
      accept: 'application/json'
    }
  })).data

  res.send(data);
}
