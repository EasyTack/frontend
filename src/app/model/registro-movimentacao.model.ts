import { Entidade } from "./entidade.model";

export class RegistroMovimentacao extends Entidade {
    data_movimentacao?: Date;
    local_origem?: String;
    local_destino?: String;
    status?: String;
    response?: any;
    
    constructor(data_movimentacao?: Date, local_origem?: String, local_destino?: String, status?: String, response?: any){
        super()
        this.data_movimentacao = data_movimentacao;
        this.local_origem = local_origem;
        this.local_destino = local_destino;
        this.status = status;
        this.response = response;
    }
}
