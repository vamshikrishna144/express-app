const express = require('express');

const app = express();

const port = 8888;

app.get('/', function(req, res) {
   res.send("my first express app!");
});

app.get('/contact', function(req, res) {
    res.send('contact me at foo.bar@gmail.com')
});

app.listen(port, function() {
    console.log(`Your app is running on http://127.0.0.1:${port}`);
});


