import React, { useState } from "react";
import {Route,Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import MerchantDetails from "./merchantDetails";
import UserDetails from "./UserDetails";
import Transaction from "./Transaction";
import LoginPage from "./Auth-Crendentials/LoginPage"
import RegisterPage from "./Auth-Crendentials/RegisterPage";
import Admin from "./Admin";
import EmailForm from "./Email";

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/merchant/details" element={<MerchantDetails />} />
      <Route path="/user/details" element={<UserDetails />} />
      <Route path="/transaction" element={<Transaction/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/email" element={<EmailForm/>} />
    </Routes>
    </>
  )
}

export default App
