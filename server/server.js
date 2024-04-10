const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.listen('3030', () => {
    console.log('Listen On Port 3030')
});

const path = require('path');
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
});