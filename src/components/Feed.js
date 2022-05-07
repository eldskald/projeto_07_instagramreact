
const posts = [
    {
        authorName: "adorable_animals",
        authorPicture: "images/adorableanimals.png",
        type: "video",
        mediaLink: ["videos/video.mp4", "videos/video.ogv"],
        likedByName: "respondeai",
        likedByPicture: "images/respondeai2.png",
        totalLikes: "69.420",
        comments: [
            {
                name: "smallcutecats",
                picture: "images/smallcutecats.png",
                text: "esse pelúcia tá se mexendo 👀",
                time: "36m",
                likes: "512 curtidas"
            },
            {
                name: "bad.vibes.memes",
                picture: "images/badvibesmemes.png",
                text: "just chillin",
                time: "11m",
                likes: "99 curtidas"
            }
        ]
    },
    {
        authorName: "meowed",
        authorPicture: "images/meowed2.png",
        type: "picture",
        mediaLink: "images/gato-telefone.png",
        likedByName: "respondeai",
        likedByPicture: "images/respondeai2.png",
        totalLikes: "101.523",
        comments: [
            {
                name: "smallcutecats",
                picture: "images/smallcutecats.png",
                text: "eu deitado tentando dormir de noite",
                time: "1h",
                likes: "436 curtidas"
            },
            {
                name: "adorable_animals",
                picture: "images/adorableanimals.png",
                text: "se fazendo de dificil pro crush",
                time: "44m",
                likes: "238 curtidas"
            }
        ]
    },
    {
        authorName: "barked",
        authorPicture: "images/barked2.png",
        type: "picture",
        mediaLink: "images/dog.png",
        likedByName: "adorable_animals",
        likedByPicture: "images/adorableanimals2.png",
        totalLikes: "99.159",
        comments: [
            {
                name: "smallcutecats",
                picture: "images/smallcutecats.png",
                text: "boop!",
                time: "24m",
                likes: "180 curtidas"
            },
            {
                name: "adorable_animals",
                picture: "images/adorableanimals.png",
                text: "🥰🥰🥰",
                time: "19m",
                likes: "238 curtidas"
            }
        ]
    },
];

export default function Feed () {

    function Media (props) {
        switch (props.type) {
            case "picture":
                return (
                    <img src={props.address} />
                );
            case "video":
                return (
                    <video controls autoplay muted>
                        <source src={props.address[0]} type="video/mp4" />
                        <source src={props.address[1]} type="video/ogv" />
                        Seu browser não suporta vídeos.
                    </video>
                );
        }
    }

    function Comment (props) {
        return (
            <div class="comentario">
                <div class="comentario-container">
                    <img src={props.picture} />
                    <div>
                        <p>
                            <strong>{props.name}</strong> {props.text}
                        </p>
                        <div>
                            <p>{props.time}</p>
                            <p>{props.likes}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function Post (props) {
        return (
            <div class="post">
                <div class="post-topo">
                    <div class="nome-da-conta">
                        <img src={props.authorPicture} />
                        <h1>{props.authorName}</h1>
                    </div>
                    <div class="icone-mais">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <Media type={props.type} address={props.mediaLink} />

                <div class="post-baixo">
                    <div>
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div>
                        <img src={props.likedByPicture} />
                        <p>Curtido por <strong>{props.likedByName}</strong> e <strong>outras {props.totalLikes} pessoas</strong></p>
                    </div>
                </div>

                <div class="comentarios-container">
                    <div class="comentarios-borda-topo"></div>
                    
                   {props.comments.map(function (comment) {
                        return (<Comment
                            name={comment.name}
                            picture={comment.picture}
                            text={comment.text}
                            time={comment.time}
                            likes={comment.likes}
                        />);
                   })}

                    <div class="comentarios-borda-topo"></div>
                    <div class="adicionar-comentario">
                        <input placeholder="Adicionar um comentário..." />
                        <div class="botao-de-enviar">
                            <ion-icon name="send-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }

    return (
        <div class="postagens">

            {posts.map(function (post) {
                return (
                    <Post
                        authorName={post.authorName}
                        authorPicture={post.authorPicture}
                        type={post.type}
                        mediaLink={post.mediaLink}
                        likedByName={post.likedByName}
                        likedByPicture={post.likedByPicture}
                        totalLikes={post.totalLikes}
                        comments={post.comments}
                    />
                );
            })}

        </div>
    );
}