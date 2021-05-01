import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

// ...

// app.get('/', (req, res) => {
//     const app_Render = ReactDOMServer.renderToString(<App />);
//
//     const indexFile = path.resolve('./build/index.html');
//     fs.readFile(indexFile, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('Something went wrong:', err);
//             return res.status(500).send('Oops, better luck next time!');
//         }
//
//         return res.send(
//             //console.log('11111 is: ' + app),
//             data.replace('<div id="root"></div>', `<div id="root">${app_Render}</div>`)
//         );
//     });
// });

app.get('/' ,(req, res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'));
});

//app.use(express.static(path.resolve(__dirname, '..', 'build')));

//app.use(express.static(path.join(__dirname, 'build')));
//app.use(express.static(path.join(__dirname, 'build/static/js')));
//app.use(express.static('./build/assets/is1.jpg'));
//app.use(express.static('./build/assets/is3.jpg'));
//app.use('/', express.static('./server-build'));

app.use('/static', express.static('build/static'));
app.use('/manifest.json', express.static('build/manifest.json'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});