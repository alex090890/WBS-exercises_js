# Implementation of ExpressJS

Exercise 1 (Help)
Install express into your directory with the npm install express --save command.
We would like to modify our following code so that it displays a message when the person arrives on the page with their browseron (http://localhost:3000), make an app.js file with :

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

const server = app.listen(port, () => console.log('Hello'));

Exercise 2 (Help)
For this Exercise we will need a little software called Insomnia, it will allow us to test our URLs.

We now want that when the user sends a GET request to the home (http://localhost:3000/) it sends back an HTML file with :


<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello</title>
</head>
  <body>
    How are you?
  </body>
</html>
Exercise 3 (Help)
We now want that when the user sends a DELETE request to the home (http://localhost:3000/) it sends back a JSON with:

{"good" : "yep"}
Exercise 4 (Help && Help && Help)
Render this EJS code if the user accesses the URL /test-ejs and render this page with my first title as value of the myTitle variable.


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <% if (myTitle) { %>
    <h1><%= myTitle %></h1>
  <% } %>
</body>
</html>
Exercise 5 (Help)
Let’s render another page at/test-ejs2 and pass the following data

{
  users : ['Bob', 'John', 'Jane' ]
}
Create an EJS page that uses the forEach method to list each element.

Exercise 6 (Help)
Create a basic HTML form with two input fields for userName and message, and send it back to the user whenever they visit /uploadTweet . The form needs a method of POST  and an action of /showTweet , the route we are submitting the form to. 

Back in the in the terminal, output to the console the values of userName and message sent by the form

Exercise 7 (Help)
Create a basic HTML form with two input fields for search and date, and send it back to the user whenever they visit /searchForm . The form needs a method of GET  and an action of /notGoogleSearch , the route we are submitting the form to. 

Back in the in the terminal, output to the console the values of search and date sent by the form

Exercise 8 (Help)
Create a route of the type /number/1 where the number will be a variable :id and will be displayed on the page. E.g. on the route /number/1337 we will see:

The number is 1337
Exercise 9 (Help)
Add Axios to your project et create a GET request on http://jsonplaceholder.typicode.com/posts/1 when the user visits http://localhost:3000/postlist.

Exercise 10 (Help)
Via the query in the previous exercise write the result of the query in a posts.json file.

Exercise 11 (Help)