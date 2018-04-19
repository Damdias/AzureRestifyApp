let restify = require('restify');
let bunyan = require("bunyan");
let config = require("./config");
let mongoose = require("mongoose");
let Book = require("./Models/BookModel");

let respond = (req, res, next) => {
    res.send({ msg: 'hello ' + req.params.name, title: process.env.TITLE || 'default' });
    next();
}

const server = restify.createServer({
    log: bunyan.createLogger({
        name: 'myapp'
    })
});
server.get('/:name', respond);
server.get('/books', (req, res, next) => {
    let book = new Book({
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    });
    book.save().then((books) => {
        res.send(books);
        next();
    }).
        catch((e) => {
            res.send({ msg: 'error occur', err: e });
            next();
        })
});
server.head('/hello/:name', respond);

server.listen(config.port, () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db.uri);

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error(err);
        process.exit(1);
    });
    db.once('open', () => {

        console.log(`Server is listening on port ${config.port}`);
    });
    //console.log(`Server is listening on port ${config.port}`);
});