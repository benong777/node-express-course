{/*
  Check username/password in post(login) request
  If exists, create new JWT
  Send back to front-end

  Set up authentication so only the request with JWT can access dashboard
*/}

const jwt = require('jsonwebtoken');
const { BadRequestError }= require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }
  console.log(username, password);

  //-- Now with username info, we can proceed with JWT
  const id = new Date();    // just for demo, normally provided by Database

  //-- For production, use LONG, complex and unguessable string value!!!
  const token = jwt.sign(
    { id, username },   // keep payload small, better user experience
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );

  res.status(200).json({ msg: 'User created.', token });
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, lucky number is ${luckyNumber}`});

}

module.exports = { login, dashboard };