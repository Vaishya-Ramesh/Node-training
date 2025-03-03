const mongoose=require('mongoose');
const Joi=require('joi');

const genreSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    }
});

const Genre=mongoose.model('Genre',genreSchema);


function validateGenres(genre)
{
    const schema=Joi.object({
        name:Joi.string().min(3).required()
    });
    return schema.validate(genre);
}

module.exports.genreSchema=genreSchema;
module.exports.Genre=Genre;
module.exports.validateGenres=validateGenres;