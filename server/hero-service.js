const { response } = require('./app');
const Hero = require('./hero-model');
const ReadPreference = requiere ('mongodb').ReadPreference;

require('./mongo').connect();

function get(req,res){
    const docquery = Hero.find({}).read(ReadPreference.NEAREST);
    docquery.exec()
        .then(heroes =>{
            res.json(heroes);
        })
        .catch(err=>{
            res.status(500).send(err);
        });
}
module.exports={
    get
};