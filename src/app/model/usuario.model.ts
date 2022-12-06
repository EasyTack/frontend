import { Configuracao } from "./configuracao.model"
import { Pessoa } from "./pessoa.model"

export class Usuario extends Pessoa {
    usuario: String = ''
    senha: String = ''
    configuracao: Configuracao = new Configuracao()
}