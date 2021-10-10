const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

const path = require('path');

app.use('/', express.static(path.join(__dirname, 'web/build')));

app.get('/**', (req, res, next)=>{
    res.sendFile(path.join(__dirname,'./web/build/index.html'))
})

app.listen(PORT, ()=>{
    console.log(`Example app is running on http://localhost:${PORT}`)
})