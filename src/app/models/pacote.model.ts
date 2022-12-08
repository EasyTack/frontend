import { Entidade } from "./common/entidade.model";

export interface Pacote extends Entidade {
    data_postagem: Date;
    data_entrega: Date;
    codigo_operador_logistico: string;
    local_origem: string;
    local_destino: string;
    status: string;
}
