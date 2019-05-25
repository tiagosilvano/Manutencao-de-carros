const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _model = new Schema({
    codigo: {
        type:String,
        required: true
    },
    kilometragem: String,
    dtManutencao: String,
    tipoManutencao: String,
    vlServico: String,
    obs:String
   
});

mongoose.model('manutencao', _model);