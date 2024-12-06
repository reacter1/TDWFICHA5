const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: {
        type: String,
        minlenght: [3, 'tem de ser no minimo 3'],
        maxlenght: [20, 'Não pode ter mais de 20 caracteres'],
        required: [true, 'campo necessário'],
        unique: [true, 'Username já existe']
    },
    Password: {
        type: String,
        minlenght: [3, 'tem de ter no minimo 3 caracteres'],
        maxlenght: [32, 'Não pode ter mais de 32 caracteres'],
        required: [true, 'campo necessário']
    }
}, {
    timestamps: true // createdAt and updatedAt
});

module.exports = mongoose.model('Users', userSchema);