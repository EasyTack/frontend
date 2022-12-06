import { Entidade } from "./entidade.model";

export class Etiqueta extends Entidade {
    nome: String
    cor: String

    constructor(nome: String = "", cor: String = ""){
        super()
        this.nome = nome
        this.cor = cor
    }
}