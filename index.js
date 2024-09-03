const express = require('express');
const cors = require("cors")
const axios = require('axios');
const app = express();


app.use(cors({
    origin: "*"
}))


app.get("/isrunning", (req, res) => {
    res.send("yes this is running!")
})

app.get("/", (req, res) => {
    res.send("server is listening")
})


// this is for fetching queries
app.get('/api/getChats', async (req, res) => {
    const { telegramUrl } = req.query; 
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const targetUrl = ;
    try {
        const response = await axios.get(telegramUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
                "Cookie": "stel_web_auth=https%3A%2F%2Fweb.telegram.org%2Fa%2F; stel_on=1; stel_dt=-330; stel_ssid=a7b8a0e2201748fe06_14884534864203537201",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
                "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            }
        });
        res.send(response.data);
        console.log(response.data)
        console.log("hello")
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.get('/fetch-telegram-chat', async (req, res) => {

    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const targetUrl = ;
    try {
        const response = await axios.get('https://t.me/rec_coders/13', {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
                "Cookie": "stel_web_auth=https%3A%2F%2Fweb.telegram.org%2Fa%2F; stel_on=1; stel_dt=-330; stel_ssid=a7b8a0e2201748fe06_14884534864203537201",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
                "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            }
        });
        res.send(response.data);
        console.log(response.data)
        console.log("hello")
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(process.env.PORT ||3000, () => {
    console.log('Server running on port 3000');
});
