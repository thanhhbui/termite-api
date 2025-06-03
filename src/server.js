import express from 'express';

const app = express();

const hostname = 'localhost';
const port = 8017;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, hostname, () => {
    console.log('hello, I am listening on http://' + hostname + ':' + port);
})