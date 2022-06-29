import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "./Pages/page";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import './App.css';
import P1 from "./Pages/Projects/P1";
import P2 from "./Pages/Projects/P2";
import P3 from "./Pages/Projects/P3";
import P4 from "./Pages/Projects/P4";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Page />}>
                <Route index element={<Home />} />
                <Route path={"*"} element={<Home />}></Route>
                <Route path={"projects/*"} element={<Projects />}></Route>
                <Route path={"projects/p1"} element={<P1 />}></Route>
                <Route path={"projects/p2"} element={<P2 />}></Route>
                <Route path={"projects/p3"} element={<P3 />}></Route>
                <Route path={"projects/p4"} element={<P4 />}></Route>
            </Route>
        </Routes>
    )
}

export default App