import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/Shop.component";
import HeaderComponent from "./components/Header/Header.component";
import SignInRegister from "./pages/SignInRegisterPage/SignInRegister.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         currentUser: null,
      };
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapshot) => {
               this.setState({
                  currentUser: {
                     id: snapshot.id,
                     ...snapshot.data(),
                  },
               }, ()=>console.log(this.state));
            });
            
         }
         if(userAuth == null){
            this.setState({currentUser: userAuth});            
         }
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapshot) => {
               console.log(snapshot);
            });
         }
      });
   }
   render() {
      return (
         <div>
            <HeaderComponent currentUser = {this.state.currentUser}/>
            <Routes>
               <Route path={"/shop"} element={<ShopPage />} />
               <Route path={"/"} element={<HomePage />} />

               <Route path={"/sign"} element={<SignInRegister />} />
               {/*  */}
            </Routes>
         </div>
      );
   }
}

export default App;
