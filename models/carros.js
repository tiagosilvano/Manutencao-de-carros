const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    placa: {
        type:String,
        required: true
    },
    marca: String,
    modelo: String,
    ano: String,
    combustivel: String
});

mongoose.model('carros', _model);