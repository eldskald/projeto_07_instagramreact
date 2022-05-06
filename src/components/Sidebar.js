
function Suggested (props) {
    return (
        <div class="sugestao">
            <div class="sugestao-conta">
                <img src={props.picture} />
                <div class="sugestao-nome">
                    <h1>{props.name}</h1>
                    <h2>{props.status}</h2>
                </div>
            </div>
            <div class="botao-de-seguir">
                Seguir
            </div>
        </div>
    );
}

export default function Sidebar () {
    return (
        <div class="sidebar">
            <div class="sidebar-fixa">
                <div class="sidebar-topo">
                    <img src="images/catanacomics.png" />
                    <div class="nome">
                        <h1>catanacomics</h1>
                        <h2>Catana</h2>
                    </div>
                </div>

                <div class="sugestoes-topo">
                    <div>Sugestões para você</div>
                    <div>Ver tudo</div>
                </div>

                <Suggested
                    name="bad.vibes.memes"
                    picture="images/badvibesmemes.png"
                    status="Segue você"
                />
                <Suggested
                    name="chibirdart"
                    picture="images/chibirdart.png"
                    status="Segue você"
                />
                <Suggested
                    name="razoesparaacreditar"
                    picture="images/razoesparaacreditar.png"
                    status="Novo no Instagram"
                />
                <Suggested
                    name="adorableanimals"
                    picture="images/adorableanimals.png"
                    status="Segue você"
                />

                <Suggested
                    name="smallcutecats"
                    picture="images/smallcutecats.png"
                    status="Segue você"
                />

                <div class="botoes-finais">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>

    );
}
