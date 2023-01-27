
import type IRepositorio from "../interfaces/IRepositorio";
import type IUsuario from "../interfaces/IUsuario";

export default function montaUsuario(dadosUsuario: any, dadosRepositorios: any): IUsuario {
    const repo_recente = dadosRepositorios.map((repo)=>{
        return {
            nome: repo.name,
            url: repo.url
        } as IRepositorio
    })

    return {
        avatar_url: dadosUsuario.avatar_url,
        login: dadosUsuario.login,
        nome: dadosUsuario.name,
        perfil_url: dadosUsuario.html_url,
        repositorios_publicos: dadosUsuario.public_repos,
        seguidores: dadosUsuario.followers,
        repo_recente: repo_recente
    }

}