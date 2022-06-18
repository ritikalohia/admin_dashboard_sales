import React from 'react';
import "./topbar.css"; 
import {Language, NotificationsNone, Settings, TableChart,Login } from '@mui/icons-material'
import {Link} from "react-router-dom"
import logo from "../../assets/images/Poppy_Foods.png"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <Link to="/">
                <div className="topLeft">
                    <span className='logo'><img src={logo} className="logoImg" alt="logo" /></span>
                </div>
            </Link>
            <div className="topRight">
                <Link to="/users/">
                    <div className="topbarIconsContainer" style={{
                        display:"flex",
                        alignItems:"center"
                        }}>
                        < TableChart />
                        <span >User Table</span>
                    </div>
                </Link>
                <div className="topbarIconsContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <Settings/>
                </div>
                <Link to="/login">
                <div className="topbarIconsContainer">
                    <Login />
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
