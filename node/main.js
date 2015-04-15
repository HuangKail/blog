var koa = require('koa');

var app = koa();

app.use(function * () {
    this.body = 'helloworld';
});

app.listen(80);