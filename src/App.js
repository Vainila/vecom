import React from "react";
import { Route, Routes, Link} from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import HatsPage from "./pages/HatsPage/HatsPage.component";
import JacketsPage from "./pages/JacketsPage/JacketsPage.component";
import SneakersPage from "./pages/SneakersPage/SneakersPage.component";
import WomenPage from "./pages/WomenPage/WomenPage.component";
import MenPage from "./pages/MenPage/MenPage.component";
import ShopPage from "./pages/ShopPage/Shop.component";
import HeaderComponent from "./components/Header/Header.component";
import SignInRegister from "./pages/SignInRegisterPage/SignInRegister.component";
const App =()=>  
   (
      <div>
      <HeaderComponent/>
      <Routes>
      
      <Route path={"/shop"} element={<ShopPage />}/>        
      <Route path={"/"} element={<HomePage />}/>        
      <Route path={"/hats"} element={<HatsPage/>} />
      <Route path={"/jackets"} element={<JacketsPage/>} />
      <Route path={"/sneakers"} element={<SneakersPage/>} />
      <Route path={"/women"} element={<WomenPage/>} />
      <Route path={"/men"} element={<MenPage/>} />
      <Route path={"/sign"} element={<SignInRegister/>} />
      {/*  */}
      </Routes>
      </div>
      );
   


export default App;
