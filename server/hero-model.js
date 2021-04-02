const mongoose = requiere ('mongoose');
const Schema = mongoose.Schema;

 const heroSchema = new Schema({

    id: {type: String, required: false, unique: true},
    name: String,
    idComputer: String,


 });

 const Hero = mongoose.model('Hero',heroSchema);
 module.exports = Hero;