import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import FicheLogement from "./Pages/FicheLogement/FicheLogement";
import Error from "./Pages/Error/Error"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement" element={<FicheLogement />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App;