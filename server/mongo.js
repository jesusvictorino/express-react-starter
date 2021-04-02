const mongoose = require("mongoose");

mongoosel.Promise = global.Promise;

const env = {
    dbName:'smartdatatools',
    key:'D3EB6WfHqPBgO1CTH7HG4cmO2hmtXJPWqoDO60pBtkJt6gjkD3fZwMD4Ka1TdQ0qH2fFM0zWxhg7OX6deWjbKQ==',
    port:10255,
}

const mongoUri =   'AccountEndpoint=https://smartdatatools.documents.azure.com:443/;AccountKey=D3EB6WfHqPBgO1CTH7HG4cmO2hmtXJPWqoDO60pBtkJt6gjkD3fZwMD4Ka1TdQ0qH2fFM0zWxhg7OX6deWjbKQ==;'

function connect(){
    return mongoose.connect(mongoUri,{useMongoClient:true});
}

module.exports = {
    connect,
    mongoose
};