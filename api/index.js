module.exports = (req, res) => {
  var body = 'Hello from Node.js on Now 2.0!';
  res.writeHead(200, {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Credentials': true,
  });
  res.end(body);
};
