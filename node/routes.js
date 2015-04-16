var fs = require('fs');
var md = require('markdown').markdown;

module.exports = {
    posts: function * (id) {
        var html;

        if (!id) {
            html = 'this is a blog site';
        }
        else {
            yield function (resolve, reject) {
                // resolve();
                fs.readFile(
                    __dirname + '/../markdown/' + id,
                    {
                        encoding: 'utf-8'
                    },
                    function (err, text) {
                        if (!err) {
                            html = md.toHTML(text);
                            resolve();
                        }
                        else {
                            resolve();
                        }
                    }
                );
            };
        }

        this.body = html;
    }
};