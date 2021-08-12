const mongoose =  require('mongoose');


const movieSchema = mongoose.Schema({
    movieName:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    },
    releaseDate:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("Movies",movieSchema)