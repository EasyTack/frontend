import { Entidade } from "./common";

export interface Configuracao extends Entidade {
    update_automatico: boolean;
    tipo_ordenacao_padrao: number;
    intervalo_atualizacao: number;
    horario_comercial_atualizacao: boolean;
}
