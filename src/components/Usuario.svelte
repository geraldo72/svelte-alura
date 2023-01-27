<script lang="ts">
    import type IUsuario from "../interfaces/IUsuario";
    import BarraSuperior from "./BarraSuperior.svelte";

    export let usuario: IUsuario;

    $: temRepos = Boolean(usuario.repo_recente.length)
</script>

<div class="card-usuario">
    <BarraSuperior />
    <div class="usuario">
        <div class="foto-container">
            <a
                href={usuario.perfil_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div
                    class="foto-usuario"
                    style:background-image="url({usuario.avatar_url})"
                />
            </a>
        </div>
        <div class="detalhes-usuario">
            {#if usuario.nome}
                <div class="info">
                    Nome: <span>{usuario.nome}</span>
                </div>
            {/if}
            <div class="info">
                Usuario: <span>{usuario.login}</span>
            </div>
            <div class="info">
                Seguidores: <span>{usuario.seguidores}</span>
            </div>
            <div class="info">
                Repositorios: <span>{usuario.repositorios_publicos}</span>
            </div>
        </div>
        {#if temRepos}
        <div class="repositorios">
            <h2 class="titulo">Repositorios Recentes:</h2>

            <ul>
                {#each usuario.repo_recente as repo}
                    <li>
                        <a
                            href="{repo.url}"
                            target="_blank"
                            rel="noopener"
                            class="repositorio"
                        >
                            {repo.nome}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
        {/if}
    </div>
</div>

<style>
    .repositorios > .titulo {
        font-size: 20px;
        line-height: 31px;
        font-weight: 600;
        color: #395278;
    }
    .repositorio {
        font-size: 20px;
        line-height: 31px;
        color: #6781a8;
        transition: color 0.2s;
    }
    .card-usuario {
        margin-top: 65px;
    }

    .usuario {
        padding: 28px 0;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
        border-radius: 0px 0px 13px 13px;

        display: flex;
        justify-content: center;
    }

    .foto-container {
        margin-right: 81px;
    }

    .foto-usuario {
        width: 12.75rem;
        height: 12.75rem;
        border: 4.56px solid #2e80fa;
        border-radius: 50%;
        background-size: cover;
        background-image: url("https://github.com/antonio-evaldo.png");
    }

    .detalhes-usuario {
        margin-right: 55px;
    }

    .detalhes-usuario > .info {
        font-weight: 600;
        font-size: 20px;
        line-height: 31px;
        color: #395278;
    }

    .detalhes-usuario > .info > span {
        color: #6781a8;
        font-weight: normal;
    }
</style>
