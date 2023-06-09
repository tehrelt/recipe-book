const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()

async function start() {
    try {
        app.listen(PORT, () => `Listening ${PORT} port`)
    } catch (e) {
        console.log(e)
    }
} 

start()