import express from 'express';
var moment = require('moment-timezone');

const config = require('../zoom.json');
const jwt = require('jsonwebtoken');
const axios = require('axios');

moment.defaultFormat = "yyyy-MM-ddTHH:mm:ssZ";

const app = express();
app.use(express.json())
const port = 3001;

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.post('/createZoomMeeting', async (req, res) => {
    var start = moment(req.body.start);
    var end = moment(req.body.end);

    var start_time = start.format("yyyy-MM-DDTHH:mm:ss");


    var topic = req.body.topic;

    var duration = moment.duration(end.diff(start));
    console.log("creating meeting");

    const payload = {
        iss: config.apikey,
        exp: ((new Date()).getTime() + 5000)
    };
    const token = jwt.sign(payload, config.secret);
    try {
        const result = await axios.post(`https://api.zoom.us/v2/users/${config.email}/meetings`, {
            "topic": topic,
            "type": 2,
            "start_time": start_time,
            "duration": duration.asMinutes(),
            "timezone": req.body.tz,
            "password": "azerty",
            "agenda": topic,

        }, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'content-type': 'application/json'
            }
        });

        res.send('created successfully');
    } catch (error) {

        console.log(error.message);
        return res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});