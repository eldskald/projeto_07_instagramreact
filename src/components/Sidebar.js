
const user = {
    name: "catanacomics",
    subname: "Catana",
    picture: "images/catanacomics.png"
};

const suggestions = [
    {
        name: "bad.vibes.memes",
        picture: "images/badvibesmemes.png",
        status: "Segue você"
    },
    {
        name: "chibirdart",
        picture: "images/chibirdart.png",
        status: "Segue você"
    },
    {
        name: "razoesparaacreditar",
        picture: "images/razoesparaacreditar.png",
        status: "Novo no Instagram"
    },
    {
        name: "adorableanimals",
        picture: "images/adorableanimals.png",
        status: "Segue você"
    },
    {
        name: "smallcutecats",
        picture: "images/smallcutecats.png",
        status: "Segue você"
    }
];

export default function Sidebar () {
    function User (props) {
        return (
            <div class="sidebar-topo">
                <img src={props.picture} />
                <div class="nome">
                    <h1>{props.name}</h1>
                    <h2>{props.subname}</h2>
                </div>
            </div>
        );
    }
    
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

    return (
        <div class="sidebar">
            <div class="sidebar-fixa">
                <User
                    name={user.name}
                    subname={user.subname}
                    picture={user.picture}
                />

                <div class="sugestoes-topo">
                    <div>Sugestões para você</div>
                    <div>Ver tudo</div>
                </div>

                {suggestions.map(function (suggested) {
                    return (
                    <Suggested
                        name={suggested.name}
                        picture={suggested.picture}
                        status={suggested.status}
                    />);
                })}

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
