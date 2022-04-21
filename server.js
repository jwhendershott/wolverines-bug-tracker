// Start up by running 'npm run devStart' in node and reach at localhost:3000.

const express = require('express');
const app = express();

app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Kyle' });
});

app.listen(3000);

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});