
function Story (props) {
    return (
        <div class="story">
            <div class="icone">
                <img src="images/stories_background.jpg" />
                <img src={props.picture} />
            </div>
            <h1>{props.name}</h1>
        </div>
    );
}

export default function Stories () {
    return (
        <div class="stories-container">
            <div class="botao-scroll">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>

            <Story name="9gag" picture="images/9gag.png" />
            <Story name="meowed" picture="images/meowed.png" />
            <Story name="barked" picture="images/barked.png" />
            <Story name="nathanpyle..." picture="images/nathanwpylestrangeplanet.png" />
            <Story name="wawawiwac..." picture="images/wawawiwacomicsa.png" />
            <Story name="respondeai" picture="images/respondeai.png" />
            <Story name="filomoderna" picture="images/filomoderna.png" />
            <Story name="memeariago..." picture="images/memeriagourmet.png" />

        </div>
    );
}
