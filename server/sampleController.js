const { javascript } = require('webpack');
const db = require('./databaseModels.js');
//require in query
const { query } = require('./databaseModels.js');

const sampleController = {};

sampleController.getAirport = (req, res, next) => {
  console.log('inside the getAirport controller')
  const allCodes = 'SELECT code from airports';
  const codes = [];
  db.query(allCodes)
    .then((results) => {
      results.rows.forEach((row) => {
        codes.push(row.code)
      })
      // console.log(codes);
      res.locals.codes = codes;
      next();
    });
};

sampleController.sendFlightInfo = (req, res, next) => {
  // const flightInsert = [req.body.dep, req.body.arr, info for user_id, info for created_at, req.body.carbon]
  // const addFlightQuery = 'INSERT INTO flights (depart, arrive, user_id, created_at, co2_impact) VALUES ($1, $2, $3, $4, $5)'
};

sampleController.addProfile = (req, res, next) => {
  const querySelector =
    'INSERT INTO users (google_id, name, email, ssid) VALUES($1,$2,$3,$4);';
  const userInfo = [
    res.locals.id,
    res.locals.name,
    res.locals.email,
    res.locals.ssid,
  ];
  db.query(querySelector, userInfo)
    .then(() => console.log('successfully queried in addProfile'))
    .catch((err) => console.log('unable to complete query in addProfile', err));
  // return next();
};
module.exports = sampleController;
