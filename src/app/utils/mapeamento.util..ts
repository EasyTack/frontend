import { Time } from "@angular/common";
import { OperadorLogistico } from "../model/operadorLogistico.model";
import { Pacote } from "../model/pacote.model";

export class Mapeamento {

    public static correiosToPacote(correio:any):Pacote{
        let pacote: Pacote = new Pacote();
        pacote.operadorLogistico = new OperadorLogistico();
        pacote.codigoOperadorLogistica = correio.codigo;
        pacote.atualizadoEm = correio.ultimo;
        pacote.criadoEm =  new Date(Date.now());
        pacote.dataEntrega = correio?.eventos[0]?.status.indexOf("entregue")>-1 ? correio?.eventos[0]?.data : null;
        pacote.dataPostagem = correio?.eventos?.length>0 ? correio?.eventos[correio?.eventos?.length-1].data : null;
        pacote.localOrigem = correio?.eventos?.length>0 ? correio?.eventos[correio?.eventos?.length-1].local : null;
        pacote.operadorLogistico.nome = "Correios";
        pacote.registroMovimentacoes = correio.eventos;
        pacote.status = correio?.eventos?.length>0 ? correio?.eventos[0].status : null;
        return pacote;
    }

}

