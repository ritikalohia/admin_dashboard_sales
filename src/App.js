import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { rows } from "./userData";
import './app.css';
import {BrowserRouter as Router, 
Routes,
Route} from "react-router-dom"; 
import UserList from "./pages/userList/UserList";
import SignIn from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import React from "react";
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

function App() {

  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Routes>
            <Route element={<SidebarLayout/>} >
              <Route exact path="/"  element={<Home />} ></Route>
              <Route path="/users" element={<UserList rows={rows} />}></Route>  
            </Route> 
        
            <Route path="/login" element={<SignIn/>} ></Route>
            <Route path="/signup" element={<SignUp/>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

