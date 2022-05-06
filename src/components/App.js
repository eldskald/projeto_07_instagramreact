import Header from "./Header";
import Stories from "./Stories";
import Sidebar from "./Sidebar";

export default function App () {
    return (
        <main>
            <Header />
            <div class="conteudo">
                <Stories />
            </div>
            <Sidebar />
        </main>
    );
}
