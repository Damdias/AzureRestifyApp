let mongooose = require("mongoose");

let BookSchema = new mongooose.Schema({
    title:{
        type:String
    },
    genre:{
        type:String
    },
    author:{
        type:String
    },
    read:{
        type: Boolean
    }
});

module.exports = mongooose.model("Book",BookSchema);