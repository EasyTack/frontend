import { Entidade } from "./entidade.model";
import { Etiqueta } from "./etiqueta.model";
import { OperadorLogistico } from "./operador-logistico.model";
import { RegistroMovimentacao } from "./registro-movimentacao.model";

export class Pacote extends Entidade {
    data_postagem?: Date;
    data_entrega?: Date;
    codigo_operador_logistico?: string;
    local_origem?: string;
    local_destino?: string;
    status?: string;
    movimentacoes?: RegistroMovimentacao[]
    etiquetas: Etiqueta[] = []
    operadorLogistico?: OperadorLogistico
}
