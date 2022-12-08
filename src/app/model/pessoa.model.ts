import { Entidade } from "./entidade.model"
import { Pacote } from "./pacote.model"

export abstract class Pessoa extends Entidade {
    nome: String
    sobrenome: String
    documento: String
    email: String;
//    pacotes: Pacote[] = []

    constructor(nome: String = '', sobrenome: String = '', documento: String = '', email: String = ''){
        super()
        this.nome = nome
        this.sobrenome = sobrenome
        this.documento = documento
        this.email = email
    }
}