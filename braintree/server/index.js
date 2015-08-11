var myApp = require( './lib/server' );
var port = process.env.PORT || process.env.npm_package_config_port || 14320;

myApp.app.listen( port );
console.log( 'Listening on port %s', port );

module.exports = myApp.app;
