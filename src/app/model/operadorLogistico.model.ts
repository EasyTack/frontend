import { Entidade } from "./entidade.model"
import { Pacote } from "./pacote.model"

export class OperadorLogistico  extends Entidade{
    nome?: String
 
    constructor(nome?: String){
        super()
        if(nome) this.nome = nome
    }
}