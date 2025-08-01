const express = require('express');
const { products } = require('./data');

const app = express();

app.use(express.static('./public'))

app.get('/api/v1/products/:productID', (req, res) => {
    const { productID } = req.params;
    const currProduct = products.find((product) => product.id === parseInt(productID));
    if (!currProduct) {
        return res.status(404).json({ message: 'That product was not found' })
    }
    res.json(currProduct)
})

app.get('/api/v1/products', (req, res) => {
    return res.json(products);
})

app.get('/api/v1/query', (req, res) => {
    const { search, maxPrice, limit } = req.query;
    console.log(search, limit);

    let sortedProducts = [...products];     // Initialize

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (maxPrice) {
        sortedProducts = sortedProducts.filter((product) => product.price <= Number(maxPrice))
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, parseInt(limit));
    }
    if (sortedProducts.length < 1) {
        res.status(200).json({ success: true, data: [] })
    }

    return res.status(200).json(sortedProducts);
})

app.get('/api/v1/test', (req, res) => {
    return res.json({ message: "It worked!" });
})

app.all('*', (req, res) => {
    return res.status(404).send('Resource not found')
})

app.listen(3000, () => {
    console.log('Listening to port 3000');
})