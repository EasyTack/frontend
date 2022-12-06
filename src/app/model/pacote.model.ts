import { Entidade } from "./entidade.model";
import { Etiqueta } from "./etiqueta.model";
import { OperadorLogistico } from "./operadorLogistico.model";
import { RegistroMovimentacao } from "./registroMovimentacao.model";

export class Pacote extends Entidade {
    dataPostagem?: Date
    dataEntrega?: Date
    codigoOperadorLogistica?: String
    localOrigem?: String
    localDestino?: String;
    status?: String
    etiquetas: Etiqueta[] = []
    operadorLogistico?: OperadorLogistico
    registroMovimentacoes?: RegistroMovimentacao[]

    constructor(codigoOperadorLogistica?: String, localOrigem?: String, localDestino?: String, dataPostagem?: Date, dataEntrega?: Date){
        super()
        this.codigoOperadorLogistica = codigoOperadorLogistica;
        this.localOrigem = localOrigem;
        this.localDestino = localDestino;
        this.dataPostagem = dataPostagem;
        this.dataEntrega = dataEntrega;
    }
}