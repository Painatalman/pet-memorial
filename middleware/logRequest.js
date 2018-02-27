const fs = require('fs');

const logFile = `${__dirname}/../server.log`; 

/**
 * Express middleware to log request information 
 * into the console and into an external log file
 * @param {Object} req the request object from express 
 * @param {Object} res the response object from express
 * @param {function} next the function that signals further execution of the request 
 */
module.exports = (req, res, next) => {
  const log = `${new Date().toString()}: ${req.method} - ${req.url}`;

  console.log(log);

  fs.appendFile(logFile, `${log}\n`);

  next();
}