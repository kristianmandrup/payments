Payments
========

> Simple koa static server for handling Braintree payments/transactions

Include `config/credentials.js` file, something like:

```js
module.exports = {
  merchantId:   'c43fjng9fzfjn7zc',
  publicKey:    '62hvbxhbfw4zkz2z',
  privateKey:   'b22668e3e4492269f3cac791aba25b3d'  
}
```

[Koa Server overview](http://koajs.com/)

Start the server!

`npm start`

It starts in `index.js` then `lib/server.js`

### Koa examples

Check out https://github.com/koajs/examples for a lot of good examples for common Koa use cases :)

### Mounting apps

[Mount](https://github.com/koajs/mount) and [Power of mounting](http://www.marcusoft.net/2015/04/koa-js-and-the-power-of-mouting.html\)

Can be used to mount multiple payment gateway apps on the same Server instance with different base routes. Awesome!!!

### Tests

Use Mocha or Karma with Sinon and Chai ;)

Using a variation of setup as per: https://github.com/Kevnz/slush-test/ at least for now...

Look at [basic-koa-api-gulp-supertest](http://russmatney.com/techsposure/basic-koa-api-gulp-supertest/)

-	[Mocha](https://mochajs.org/)
-	[Chai](http://chaijs.com/)
-	[SinonJs](http://sinonjs.org/)

See `build/tasks/test.js` and `/test` folder.

### Client app

Use: https://github.com/babel/generator-babel-boilerplate to get going ;)
