const express = require('express');


const app = express();


app.get('/', (req, res) => {
    const name = req.query.name || 'Пользователь'
    const message = req.query.message || 'Поменяй мое имя и текст!'

    res.send(`Hello ${name}! ${message}`)
    
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`)
})