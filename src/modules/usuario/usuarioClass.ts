import {Document} from 'mongoose';
import {IUsuario} from './usuario';

export class Usuario extends Document implements IUsuario{
    id;
    nome;
    email;
}