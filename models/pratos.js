const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menu_do_diaSchema = new Schema({
    CodigoDoPrato: {
        type: Number,
        min: [0, 'tem de ser no minimo 1'],
        required: [true, 'campo necessário']
    },
    NomeDoPrato: {
        type: String,
        min: [3, 'tem de ter no minimo 3 caracteres'],
        max: [30, 'Não pode ter mais de 30 caracteres'],
        required: [true, 'campo necessário']
    },
    CategoriaDoPrato: {
        type: String,
        min: [3, 'tem de ter no minimo 3 caracteres'],
        max: [20, 'Não pode ter mais de 20 caracteres'],
        required: [true, 'campo necessário']
    },
    TipoDoPrato: {
        type: String,
        min: [3, 'tem de ter no minimo 3 caracteres'],
        max: [20, 'Não pode ter mais de 20 caracteres'], // Erros feitos aqui de maneira [regra, "mensagem de erro" - caso não cumpra a regra]  | ponto 12 da ficha 3 | 
        required: [true, 'campo necessário']
    },
    PrecodoPrato: {
        type: Number,
        min: [1, 'tem de ser no minimo 1'], // Extra implementar validação do preço
        required: [true, 'campo necessário']
    }
}, {
    timestamps: true // createdAt and updatedAt
});

module.exports = mongoose.model('menu_do_dia', menu_do_diaSchema,'menu_do_dia');
