import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import HKBK_Logo from "../image/HKBK_Logo.webp";
import Name from "../image/Name.jpg";
import Recommendation from "../image/Recommend.jpg";
import Drive from "../image/Drive.png";
import Cources from "../image/Cources.png";
import { MdNotifications, MdLibraryBooks, MdDashboardCustomize } from "react-icons/md";
import { GrPowerShutdown } from "react-icons/gr";
import IconButton from '@mui/material/IconButton';
import { FaUserCircle } from "react-icons/fa";
import ReactRoundedImage from "react-rounded-image";
import Tooltip from '@mui/material/Tooltip';

export default function header() {
    return (
        <>
            <div className='Main_Header'>
                <div className='Top_Header'>
                    <div className='Top_Left_Header'>
                        <Link to="/"><img className='Header_logo' src={HKBK_Logo} /></Link>
                        <Link to="/"><img className='Header_name_logo' src={Name} /></Link>
                    </div>
                    <div className='Top_Right_Header'>
                        <Tooltip title=<p>Notification</p> arrow>
                            <IconButton className='top-icon'><MdNotifications style={{ fontSize: "1.65rem" }} /></IconButton>
                        </Tooltip>
                        <Tooltip title=<p>Profile</p> arrow>
                            <IconButton className='top-icon'><FaUserCircle style={{ fontSize: "1.6rem" }} /></IconButton>
                        </Tooltip>
                        {/* <Link to="/"> */}
                        <Tooltip title=<p>Logout</p> arrow>
                            <IconButton className='top-icon' ><GrPowerShutdown style={{ fontSize: "1.6rem" }} /></IconButton>
                        </Tooltip>
                        {/* </Link> */}
                    </div>
                </div>
                <div className='Bottom_Header'>
                    <div className='Bottom_Header_Content'>
                        <div className='Menu'>
                            <div className='Round' style={{ marginLeft: "1rem" }}>
                                <img src={Recommendation} />
                            </div>
                            <a>RECOMMEND</a>
                        </div>
                        <div className='Menu'>
                            <div className='Round'>
                                <Link to="/Drives"><img src={Drive} /></Link>
                            </div>
                            <Link to="/Drives"><a style={{ marginLeft: "0.2rem" }}>DRIVES</a></Link>
                        </div>
                        <div className='Menu'>
                            <div className='Round'>
                                <Link to="/Cources"><img src={Cources} /></Link>
                            </div>
                            <Link to="/Cources"> <a>COURCES</a></Link>
                        </div>
                        <div className='Menu'>
                            <div className='Round' style={{ marginLeft: "1rem" }}>
                                <img src={Recommendation} />
                            </div>
                            <a>RECOMMEND</a>
                        </div><div className='Menu'>
                            <div className='Round' style={{ marginLeft: "1rem" }}>
                                <img src={Recommendation} />
                            </div>
                            <a>RECOMMEND</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}