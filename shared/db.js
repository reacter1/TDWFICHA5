const mongoose = require('mongoose');
mongoose.connect('mongodb://leonardix12:pilapilatic2@tdwficha5-shard-00-00.drtjx.mongodb.net:27017,tdwficha5-shard-00-01.drtjx.mongodb.net:27017,tdwficha5-shard-00-02.drtjx.mongodb.net:27017/?ssl=true&replicaSet=atlas-spgr6g-shard-0&authSource=admin&retryWrites=true&w=majority&appName=TDWFicha5', {
     useNewUrlParser: true, useUnifiedTopology: true 
});

async function connectToDB(){
    mongoose.connection.on('connected',() => {
        console.log('Conectado à DB');
    });
    
    mongoose.connection.on('error', (err) => {
        console.error('Erro na conexão à DB: ', err);
    });
}

module.exports = connectToDB;