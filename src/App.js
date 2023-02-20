import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";
import Drives from "./Components/Drives";
import Cources from "./Components/Cources";
import Profile from "./Components/Profile";
import Header from "./Components/Header";

function App() {
//   const [login, setLogin] =useState(true);
//   if (login===false){
//       return (
//           <Suspense fallback={null}>
//           <Router>
//               <div>
             
//                   <Route path="/" exact component={Login} />
//                   <Route path="/Signup" exact component={Signup} />
  
//               </div>
  
//           </Router>
          
//           </Suspense>
  
//       );

//   }
//   else
//   {
      return (
          <Suspense fallback={null}>
          <Router>
              <div>
              <Header/>
              <Route path="/" exact component={Dashboard} />
              <Route path="/Drives" exact component={Drives} />
              <Route path="/Cources" exact component={Cources} />
              <Route path="/Profile" exact component={Profile} />
              {/* <Route path="/Signup" exact component={Signup} /> */}
              {/* <Sidebar /> */}
              {/* <Route path="/Dashboard" exact component={Dashboard} /> */}
              {/* <Route path="/Total_Booking" exact component={Total_Booking} />
              <Route path="/Customer_Details" exact component={Customer_Details} />
              <Route path="/Booking" exact component={Booking} />
              <Route path="/MasterData" exact component={MasterData} />
              <Route path="/ViewcustomerDetails/:id" exact component ={ViewcustomerDetails}/> */}
 
              </div>
          </Router>
          <Footer />
          </Suspense>
      );
  }
 
// }

export default App;
