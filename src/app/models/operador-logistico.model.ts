import { Entidade } from "./common/entidade.model";

export interface OperadorLogistico extends Entidade {
    documento: string;
    razao_social: string;
    nome_fantasia: string;
}
