var koa = require('koa');
var app = koa();
var route = require('koa-route');

var routes = require('./routes');

app.use(route.get('/posts/:id', routes.posts));

app.listen(3000);