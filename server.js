// --- nodejs express
const path = require('path') //otomatis sudah ada di node modul
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const data = require('./data/items.json')

// --- setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (request, response) => {
    response.render('index', {
        items: data
    })
})
app.get('/detail/:id', (req, res) => {
    const item = data.find(i => {
        return i.id === parseInt(req.params.id)
    })
    res.render('detail', {
        item: item
    })
})
app.get('/echo', (req, res) => {
    res.render('post')
})
app.post('/echo', (req, res) => {
    res.render('post', {
        name: req.body.name
    });
})

// app.get('/pindah', (req, res) => {
//     res.redirect('https://ex-school.com')
// })

// --- return file
app.listen(3000, () => {
    console.log('Magic happen at http://127.0.0.1:3000/')
})

// --- middleware
// const middlewareSatu = (request, response, next) => {
//     console.log('Middleware Satu')
//     next()
// }
// const middlewareDua = (request, response, next) => {
//     console.log('Middleware Dua')
//     next()
// }
// app.use(middlewareSatu)
// app.use(middlewareDua)

// ---- nodejs murni
// const http = require('http')

// const handleServer = (request, response) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     response.end('Helo Aditya Ardiansyah')
// }

// http.createServer(handleServer).listen(3000, '127.0.0.1')