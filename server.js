const express = require ('express');

const app = express();

app.get('/mensaje', (req, res) => {
    res.send('Hi from Heroku')
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})

server.on('error', error => console.log(`server error ${error}`))