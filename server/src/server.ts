import express from 'express';
var moment = require('moment');
const app = express();
app.use(express.json())
const port = 3001;

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.post('/createZoomMeeting', (req, res) => {
    var start = moment(req.body.start);
    var end = moment(req.body.end);
    var topic = req.body.topic;
    console.log(start);
    console.log(end);
    console.log(topic);

    res.send('created successfully');

});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});