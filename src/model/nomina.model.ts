import mongoose, { Schema, model, Model } from 'mongoose';
import { INomina } from '../interfaces'

const nominaSchema = new Schema({
    razonSocial: {
        type: String,
        require: true
    },
    pais: {
        type: String,
        require: true
    },
    incripcion: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});


//TODO:  Crear indice de mongo, me permiten realizar el filtrado en breakpoints con filtro
nominaSchema.index({ razonSocial: 'text', pais: 'text' });

const NominaModel: Model<INomina> = mongoose.models.Nomina || model('Nomina', nominaSchema);

export default NominaModel;