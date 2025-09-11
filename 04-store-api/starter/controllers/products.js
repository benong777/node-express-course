const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
  const {
    featured,
    company,
    name,
    sort,
    fields,
    numericFilters,
  } = req.query;

  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  //-- Filtering 
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|>|<=|>=|=)\b/g;
    let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);

    const options = ['price', 'rating'];  // For numericFilters, only these number fields can be processed 
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = {[operator]: Number(value)};
      }
    });

    console.log(queryObject);
  }

  //-- Updated with sort
  let result = Product.find(queryObject);

  //-- Sort
  if(sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    //-- default: sort by Date
    result = result.sort('createdAt');
  }

  //-- Select fields to display
  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  //-- Page arrangement
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
}

module.exports = { getAllProducts, getAllProductsStatic };