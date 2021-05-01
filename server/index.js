import React from 'react';
import express from 'express';

const PORT = process.env.PORT || 3006;
const app = express();


app.get('/' ,(req, res)=>{
    res.sendFile('Учеба\\project\\try12/build/index.html', {root: __dirname});
});


app.use('/static', express.static('build/static'));
app.use('/assets', express.static('build/assets'));
app.use('/manifest.json', express.static('build/manifest.json'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});