import { Entidade } from "./common";

export interface Etiqueta extends Entidade {
    nome: string;
    cor: string;
    codigo: string;
}