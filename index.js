import axios from "axios";

const ips = [
    'discord.com',
    'test.com'
]

const baseUrl = 'https://marzban.bahooacademy.top:8443'
const tokenUrl = baseUrl + '/api/admin/token'
const configUrl = baseUrl + '/api/user/sajjad'

const { access_token } = (await axios.post(tokenUrl, 'username=admin&password=S%40jjaddg', {
    headers: {
        "accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    }
})).data

const auth = `Bearer ${access_token}`

const { links: [vmess, vless, trojan] } = (await axios.get(configUrl, {
    headers: {
        accept: 'application/json',
        Authorization: auth
    }
})).data

const vmessData = JSON.parse(Buffer.from(vmess.slice(8,), 'base64').toString());

const configs = []

ips.map(item => {


    vmessData.add = item
    const vmessModified = "vmess://" + Buffer.from(JSON.stringify(vmessData)).toString('base64');
    const vlessModified = vless.replace(/@.*:/, `@${item}:`)
    const trojanModified = trojan.replace(/@.*:/, `@${item}:`)

    configs.push(vmessModified)
    configs.push(vlessModified)
    configs.push(trojanModified)
})

console.log(configs);

const test = (await axios.get('https://marzban.bahooacademy.top:8443/sub/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbWluIiwiYWNjZXNzIjoic3Vic2NyaXB0aW9uIiwiaWF0IjoxNjgwOTAzNDUzfQ.UvSWWLgwM4aigZyoyjqApbTacEPokPQmLaolnWhS2Ww', {
    headers : {
        accept: 'application/json'
    }
})).data

console.log(Buffer.from(test, 'base64').toString())



