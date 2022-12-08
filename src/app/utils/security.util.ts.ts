import { Configuracao } from "../model/configuracao.model"
import { Usuario } from "../model/usuario.model"

export class Security {

    public static set(user: Usuario, token: string){
        const data = JSON.stringify(user)

        localStorage.setItem('user', btoa(data))
        localStorage.setItem('user-token', token)
    }

    public static clear(){
        localStorage.removeItem('user')
        localStorage.removeItem('user-token')
        localStorage.removeItem('user-config')
    }

    public static setUser(user: Usuario){
        const data = JSON.stringify(user)
        localStorage.setItem('user', btoa(data))
    }

    public static setToken(token: string){
        localStorage.setItem('user-token', token)
    }

    public static setConfig(config: Configuracao){
        const data = JSON.stringify(config)
        localStorage.setItem('user-config', btoa(data))
    }


    public static getUser(): Usuario{
        const data = localStorage.getItem('user')

        if(data) return JSON.parse(atob(data))
        else return new Usuario()
    }

    public static getToken(): string | null{
        const data = localStorage.getItem('user-token')

        if(data) return data
        else return null
    }

    public static getConfig(): Configuracao | null{
        const data = localStorage.getItem('user-config')

        if(data) return JSON.parse(atob(data))
        else return null
    }

    public static hasToken(): boolean {
        if(this.getToken()) return true
        else return false
    }
}