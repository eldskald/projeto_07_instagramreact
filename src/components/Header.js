
function Logo () {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="images/logo.png"/>
        </div>
    );
}

function LogoMobile () {
    return (
        <div class="logo-mobile">
            <img src="images/logo.png"/>
        </div>
    );
}

function SearchBar () {
    return <input class="barra-de-pesquisa" placeholder="Pesquisar" />;
}

function Menu () {
    return (
        <div class="menu">
            <div class="nao-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
            <div class="mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </div>
    );
}

export default function Header () {
    return (
        <div class="barra-topo">
            <div>
                <Logo />
                <LogoMobile />
                <SearchBar />
                <Menu />
            </div>
        </div>
    );
}