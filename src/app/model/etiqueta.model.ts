import { Entidade } from "./entidade.model";

export class Etiqueta extends Entidade {
    nome: String
    cor: String
    codigo: String

    constructor(nome: String = "", cor: String = "", codigo: String = ""){
        super()
        this.nome = nome
        this.cor = cor
        this.codigo = codigo
    }
}