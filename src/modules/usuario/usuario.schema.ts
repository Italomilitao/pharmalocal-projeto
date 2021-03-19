import * as mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        email: {type: String, required: true},
    },{
        timestamps: true
    }
);

export default UsuarioSchema;
