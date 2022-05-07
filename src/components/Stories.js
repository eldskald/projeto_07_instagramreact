
const stories = [
    {
        name: "9gag",
        picture: "images/9gag.png"
    },
    {
        name: "meowed",
        picture: "images/meowed.png"
    },
    {
        name: "barked",
        picture: "images/barked.png"
    },
    {
        name: "nathanpyle...",
        picture: "images/nathanwpylestrangeplanet.png"
    },
    {
        name: "wawawiwac...",
        picture: "images/wawawiwacomicsa.png"
    },
    {
        name: "respondeai",
        picture: "images/respondeai.png"
    },
    {
        name: "filomoderna",
        picture: "images/filomoderna.png"
    },
    {
        name: "memeariago...",
        picture: "images/memeariagourmet.png"
    }
]

export default function Stories () {
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

    return (
        <div class="stories-container">
            
            {stories.map((story) => <Story name={story.name} picture={story.picture} />)}

            <div class="botao-scroll">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
