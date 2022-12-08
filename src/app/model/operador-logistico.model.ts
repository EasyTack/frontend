import { Entidade } from "./entidade.model"

export class OperadorLogistico extends Entidade{
    nome_fantasia?: String
    documento?: String
    razao_social?: String

    constructor(nome?: String, documento?: String, razao?:String){
        super()
        this.nome_fantasia = nome
        this.documento = documento
        this.razao_social = razao
    }
}