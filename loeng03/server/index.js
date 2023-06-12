const express = require('express')
const app = express()
const port = 3000

const todos = [
    {
        todoID: 0,
        text: 'pese hambad'
    }
]

app.get('/', (req, res) => {
    res.send(JSON.stringify(todos))
})

app.post('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

