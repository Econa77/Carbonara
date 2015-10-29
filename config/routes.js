var config = require('./config');
var routes = require(config.root + '/routes');
var ios = require(config.root + '/routes/ios');

module.exports = function (app) {
  app.get('/', routes.index);
  app.get('/ios', ios.index);
};
