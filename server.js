const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/node', (req, res) => res.send('Hello Node'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server is running on port 3000..."));