const express = require('express');

const app = express();

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
};

app.use(logger);

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})














// const express = require('express');
// const logger = require('./logger');
// const authorize = require('./authorize');

// const app = express();

// // request => middleware => response
// app.use([authorize, logger]);

// app.get('/', (req, res) => {
//     res.send('Home page');
// });

// app.get('/about', (req, res) => {
//     res.send('About page');
// });

// app.get('/api/products', (req, res) => {
//     res.send('Products Page');
// });

// app.get('/api/items', (req, res) => {
//     console.log(req.user);
//     res.send('Items page');
// });

// app.get('*', (req, res) => {
//     res.status(404).send('404 Resource not found');
// });

// app.listen(3000, () => {
//     console.log('Listening on port 3000...');
// });