const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      // Alternatively you can provide a Google Analytics View ID
      GA: '201366991',
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      },
      routeFormatter(path) {
        return path.replace(/^\/app/, '');
      }
    })
  ]
};