import { Time } from "@angular/common";
import { Entidade } from "./entidade.model";

export class RegistroMovimentacao extends Entidade {
    data?: Date;
    hora?: Time;
    local?: String;
    subStatus?: [];
    status?: String
}