const express = require('express')
const app = express()
const errorPage = '/public/html/404.html'
const listenPort = 8080

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.get('*', (req, res) => {
    //Se si sta richiedendo una risorsa che non esiste, DEVE ESSERE SEMPRE COME ULTIMO
    res.status(404).sendFile(__dirname + errorPage)
})

app.listen(listenPort, () => {
    console.log(`Pagina web in ascolto su \x1b[91mhttp://localhost:${listenPort}`, '\x1b[0m')
    console.log('\x1b[94mServer has started!', '\x1b[0m')
})