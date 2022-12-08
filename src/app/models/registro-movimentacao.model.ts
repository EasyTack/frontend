import { Entidade } from "./common/entidade.model";

export interface RegistroMovimentacao extends Entidade {
    data_movimentacao?: Date;
    local_origem?: string;
    local_destino?: string;
    status?: string;
    response?: object;
}
