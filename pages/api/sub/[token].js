// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {useMemo} from 'react'
import axios from 'axios'
import data from '../../../data.json'

export default async function handler(req, res) {
    const token = req.query.token;
    const mydata = data.join('\r\n')
    res.send(token==='family'?mydata:null)
}
