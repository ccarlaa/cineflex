import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header";
import FirstPage from "../FirstPage";
import SecondPage from "../SecondPage";
import ThirdPage from "../ThirdPage";
import FourthPage from "../FourthPage";

import "./style.css";

export default function App() {
    return (
        
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/SecondPage/:idMovie" element={<SecondPage />} />
                <Route path="/ThirdPage/:idSeats" element={<ThirdPage />} />
                <Route path="/FourthPage" element={<FourthPage />}/>
            </Routes>
        </BrowserRouter>
        
    )
}