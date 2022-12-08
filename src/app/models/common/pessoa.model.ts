import { Entidade } from "./entidade.model";

export interface Pessoa extends Entidade {
    nome: string;
    sobrenome: string;
    documento: string;
}
