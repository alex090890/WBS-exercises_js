const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const path = require('path');
let ejs = require('ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Hello</title>
    </head>
      <body>
        How are you?
      </body>
    </html>
    `);
});

app.delete('/', (req, res) => {
    res.json({"good" : "yep"});
});

app.get('/test-ejs', (req, res) => {
    res.render('test', { myTitle: 'My First Title' });
});

app.get('/test-ejs2', (req, res) => {
    res.render('test2', { users: ['Bob', 'John', 'Jane'] });
});

app.get('/uploadTweet', (req, res) => {
    res.render('uploadTweet');
});

app.post('/showTweet', (req, res) => {
    console.log(req.body.userName);
    console.log(req.body.message);
    res.send('Received your tweet!');
});

const server = app.listen(port, () => console.log(`Hello. The server is opened at the port ${port}`));