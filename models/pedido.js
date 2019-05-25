const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    emissao: {
        type: Date,
        default: Date.now
    },
    cliente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    itens: [{
        produto: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'produtos'
        },
        preco: Number,
        quantidade: Number
    }]
});

mongoose.model('pedidos', _model);