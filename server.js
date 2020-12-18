const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'));
app.use('/src', express.static(__dirname + '/src/css'))
app.use('/src', express.static(__dirname + '/src/js'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/docs/src/index.html')
})

app.listen(port, () => console.info('App listening on port ${port}'))