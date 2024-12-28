import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Everyday from "./Component/Everyday";
import Veg from "./Component/Pizzas";
import React from "react";
import { Route ,Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import AddPizza from "./Component/AddPizza";
import Update from "./Component/UpdatePizza";
function App()
{
    
    return(
    <>
    <Navbar/>
    {/* <Home/> */}
   <Routes>
   <Route path="/Home" element={<Home/>}/>
    <Route path="/Everyday" element={<Everyday/>}/>
    <Route path="/Veg" element={<Veg/>}/>
    <Route path="/AddPizza" element={<AddPizza/>}/>
    <Route path="/Update/:id"element={<Update/>}/>



    </Routes>
    <Footer/>
    
    </>
    )
}

export default App;