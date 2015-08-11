/**
 * payments
 */

var path        = require( 'path' );
var koa         = require( 'koa' );
var logger      = require( 'koa-logger' );
var serve       = require( 'koa-static' );
var route       = require( 'koa-route' );
var Router      = require( 'koa-router' );
var mount       = require( 'koa-mount' );

var app = koa();
app.use( logger() );

var credentials = require('../config/credentials');
var braintree = require("braintree");

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   credentials.merchantId,
    publicKey:    credentials.publicKey,
    privateKey:   credentials.privateKey
});

var router = new Router({
  prefix: '/braintree'
});

var paymentsApp = {
  router: router,
  gateway: gateway,
  app: app
};

// The REAL braintree routes...
// var routes = require('./routes')(paymentsApp);
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

app.use(logger());

// See https://github.com/russmatney/koa-gulp-crud
// Dummy endpoints for testing
var endpoint = require('./api/endpoint');

// GET route
app.use(route.get('/', endpoint.show));
// POST route
app.use(route.post('/', endpoint.create));

// Custom 404
app.use( function *(next) {
    yield next;
    if ( this.body || !this.idempotent ) {
        return;
    }
    this.status = 404;
});

// Serve the frontend (such as public/index.html)
app.use( serve( path.join( __dirname, '../public' ) ) );

// Export composable app
module.exports = paymentsApp;
