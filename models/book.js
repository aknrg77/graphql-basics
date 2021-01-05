const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    name :{
        type: String
    },
    genre :{
        type : String
    },
    authorid :{
        type : String
    }

},{
    timestamps:true
});


var Book = mongoose.model('Book',bookSchema);
module.exports = Book;