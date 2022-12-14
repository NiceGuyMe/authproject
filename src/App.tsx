import React from 'react';
import {Routes} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Login from "./component/Login"
import Welcome from "./component/Welcome"
import {Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/welcome" element={ <Welcome/> } />
        </Routes>
        </BrowserRouter>
    );
}
export default App;
