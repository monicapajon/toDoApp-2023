import { Outlet } from "react-router-dom";
import { Footer, Header, Main, Menu } from "./components";

function App() {
    return (
        <>
            <Header />
            <Menu />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    )
}
export default App;