const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    const data = fs.readFileSync('./data/data.json', 'utf8')
    res.send(data)
})

app.post('/', (req, res) => {
    const data = fs.readFileSync('./data/data.json', 'utf8')
    const json = JSON.parse(data)
    const id = uuidv4()

    console.log(req.body)

    json.post[id] = {
        title: req.body.title,
        content: req.body.content
    }

    fs.writeFileSync('./data/data.json', JSON.stringify(json), 'utf8')
    res.send({id: id})
})

app.patch('/:id', (req, res) => {
    const pageId = req.params.id
    const data = fs.readFileSync('./data/data.json', 'utf8')
    const json = JSON.parse(data)

    if (!json.post[pageId]) {
        res.status(404).send({
            'code': 'not found'
        })
        return
    }

    if (req.body.title) json.post[pageId].title = req.body.title
    if (req.body.content) json.post[pageId].content = req.body.content

    fs.writeFileSync('./data/data.json', JSON.stringify(json), 'utf8')
    res.send()
})

app.delete('/:id', (req, res) => {
    const pageId = req.params.id
    const data = fs.readFileSync('./data/data.json', 'utf8')
    const json = JSON.parse(data)
    delete json.post[pageId]
    fs.writeFileSync('./data/data.json', JSON.stringify(json), 'utf8')
    res.send()
})

app.listen(port, () => {
    console.log("Server Started!")
})