import { Entidade } from "./entidade.model";

export class  Configuracao extends Entidade {
    update_automatico?: boolean;
    tipo_ordenacao_padrao?: number;
    intervalo_atualizacao?: number;
    horario_comercial_atualizacao?: boolean;

    
    constructor(update?: boolean, tipo?:number, intervalo?:number, horario?:boolean){
        super()
        this.update_automatico = update;
        this.tipo_ordenacao_padrao = tipo;
        this.intervalo_atualizacao = intervalo;
        this.horario_comercial_atualizacao = horario;
    
    }
}
