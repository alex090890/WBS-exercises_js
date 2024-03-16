//Exercise 1

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const path = require('path');
let ejs = require('ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const axios = require('axios');
const fs = require('fs');

app.set('view engine', 'ejs');

//Exercise 2
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

//Exercise 3
app.delete('/', (req, res) => {
    res.json({"good" : "yep"});
});

//Exercise 4
app.get('/test-ejs', (req, res) => {
    res.render('test', { myTitle: 'My First Title' });
});

//Exercise 5
app.get('/test-ejs2', (req, res) => {
    res.render('test2', { users: ['Bob', 'John', 'Jane'] });
});

//Exercise 6
app.get('/uploadTweet', (req, res) => {
    res.render('uploadTweet');
});

app.post('/showTweet', (req, res) => {
    console.log(req.body.userName);
    console.log(req.body.message);
    res.send('Received your tweet!');
});

//Exercise 7
app.get('/searchForm', (req, res) => {
    res.send(`
    <html>
        <body>
            <form action="/notGoogleSearch" method="GET">
                <input type="text" name="search" placeholder="Search">
                <input type="date" name="date">
                <button type="submit">Submit</button>
            </form>
        </body>
    </html>
    `);
});

app.get('/notGoogleSearch', (req, res) => {
    console.log(req.query.search);
    console.log(req.query.date);
    res.send('Form submitted');
});


//Exercise 8
app.get('/number/:id', (req, res) => {
    res.send(`The number is ${req.params.id}`);
});

//Exercise 9
app.get('/postlist', (req, res) => {
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send('Error occurred while fetching data');
        });
});

//Exercise 10
app.get('/postlist1', (req, res) => {
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            fs.writeFile('posts.json', JSON.stringify(response.data, null, 2), (err) => {
                if (err) {
                    console.log(err);
                    res.send('Error occurred while writing data to file');
                } else {
                    res.send('Data successfully written to posts.json');
                }
            });
        })
        .catch(error => {
            console.log(error);
            res.send('Error occurred while fetching data');
        });
});

const server = app.listen(port, () => console.log(`Hello. The server is opened at the port ${port}`));