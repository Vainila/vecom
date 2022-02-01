import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/Shop.component";
import CheckoutPage from "./pages/checkoutPage/checkout.component";

import HeaderComponent from "./components/Header/Header.component";
import SignInRegister from "./pages/SignInRegisterPage/SignInRegister.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         currentUser: null,
      };
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapshot) => {
               setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data(),
               });
            });
         }
         if (userAuth == null) {
            this.setState({ currentUser: userAuth });
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
            <HeaderComponent />
            <Routes>
               <Route path={"/shop/*"} element={<ShopPage />} />
               <Route index path={"/"} element={<HomePage />} />
               <Route
                  path={"/sign"}
                  element={
                     this.props.currentUser 
                     ? (<Navigate replace to="/" />)
                      : (<SignInRegister />)
                  }
               />
               <Route path={"/checkout"} element={<CheckoutPage/>}/>
                  

            </Routes>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
