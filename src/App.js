import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import FicheLogement from "./Pages/FicheLogement/FicheLogement.jsx";
import Error from "./Pages/Error/Error.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const GlobalStyled = createGlobalStyle`
* {
    font-family: 'Montserrat', Helvetica, sans-serif;
}
body {
    margin: 0;
}
`

function App() {
    return (
        <div className="App">
            <GlobalStyled />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
        </div>
    )
}

export default App;