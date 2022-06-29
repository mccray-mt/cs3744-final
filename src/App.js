import React from "react";
import {Route, Routes} from "react-router-dom";
import Page from "./Pages/page";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import './App.css';

function App(){
    return(
        <Routes>
            <Route path={"/"} element={<Page />}>
                <Route index element={<Home />}/>
                <Route path={"*"} element={<Home />}></Route>
                <Route path={"projects/*"} element={<Projects />}></Route>
            </Route>

        </Routes>
        )
}

export default App