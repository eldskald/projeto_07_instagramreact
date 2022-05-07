import Header from "./Header";
import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

export default function App () {
    return (
        <main>
            <Header />
            <div class="conteudo">
                <Stories />
                <Feed />
            </div>
            <Sidebar />
        </main>
    );
}
