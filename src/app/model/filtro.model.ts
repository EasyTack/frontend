import { Etiqueta } from "src/app/model/etiqueta.model"

export enum TipoFiltro {
    Codigo,
    OperadorLogistico,
    Origem,
    Destino,
    Etiqueta,
    Status,
    DataPostagem,
    DataEntrega
}

export class Filtro {
    tipoFiltro?: TipoFiltro

    buscaCodigo?: String
    buscaOperadorLogistico?: any
    buscaOrigem?: String
    buscaDestino?: String
    buscaEtiqueta?: Etiqueta
    buscaStatus?: String
    buscaDataPostagemInicio?: Date
    buscaDataPostagemFim?: Date
    buscaDataEntregaInicio?: Date
    buscaDataEntregaFim?: Date

    constructor(tipoFiltro: TipoFiltro){
        this.tipoFiltro = tipoFiltro
    }

    getString(): String{
        switch(this.tipoFiltro){
            case TipoFiltro.Codigo: return `Código: ${this.buscaCodigo}`
            case TipoFiltro.OperadorLogistico: return `Operador Logístico: ${this.buscaOperadorLogistico?.nome}`
            case TipoFiltro.Origem: return `Origem: ${this.buscaOrigem}`
            case TipoFiltro.Destino: return `Destino: ${this.buscaDestino}`
            case TipoFiltro.Etiqueta: return `Etiqueta: ${this.buscaEtiqueta?.nome}`
            case TipoFiltro.Status: return `Status: ${this.buscaStatus}`
            case TipoFiltro.DataPostagem: return `Período Postagem: ${this.formatarData(this.buscaDataPostagemInicio)} - ${this.formatarData(this.buscaDataPostagemFim)}`
            case TipoFiltro.DataEntrega: return `Período Entrega: ${this.formatarData(this.buscaDataEntregaInicio)} - ${this.formatarData(this.buscaDataPostagemFim)}`
        }
        return ''
    }

    private formatarData(date: Date = new Date): String{
        let dia  = date.getDate().toString(),
          diaF = (dia.length == 1) ? '0'+dia : dia,
          mes  = (date.getMonth()+1).toString(),
          mesF = (mes.length == 1) ? '0'+mes : mes,
          anoF = date.getFullYear();
          return diaF+"/"+mesF+"/"+anoF;
      }
}