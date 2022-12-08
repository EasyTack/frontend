import { Pessoa } from "./common/pessoa.model";

export interface Usuario extends Pessoa {
    usuario?: string;
    email?: string;
    senha?: string;
}
