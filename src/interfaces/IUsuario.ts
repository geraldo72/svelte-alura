import type IRepositorio from "./IRepositorio";

export default interface IUsuario{
    login: String;
    avatar_url: string;
    perfil_url: string;
    nome:string;
    repositorios_publicos: number;
    seguidores: number;
    repo_recente: IRepositorio[];
}