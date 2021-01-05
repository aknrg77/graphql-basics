const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    name :{
        type: String
    },
    age :{
        type : Number
    }

},{
    timestamps:true
});


var Author = mongoose.model('Author',authorSchema);
module.exports = Author;