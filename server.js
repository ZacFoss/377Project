const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const router = express.Router()


app.use(express.static('public'))
//app.use('/src', express.static(__dirname + '/src/js'))

/*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/docs/src/index.html')
}) */

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});
router.get('/about.html', function(req, res)  {
    res.sendFile(path.join(__dirname + '/public/about.html'))
})

router.get('/index.html', function(req, res)  {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/documentation.html', function(req, res)  {
    res.sendFile(path.join(__dirname + '/public/documentation.html'))
})

router.get('/', function(req, res)  {
    res.sendFile(path.join(__dirname + '/docs/css/styles.css'))
})

app.use('/', router);
app.listen(process.env.port || 4000);

/*app.listen(port, () => console.info('App listening on port ${port}'))*/