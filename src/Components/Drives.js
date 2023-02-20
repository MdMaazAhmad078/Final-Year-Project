import React, { useState } from 'react';
import "./Drives.css";
import Juspay from "../image/Juspay.png";
import DeltaX from "../image/DeltaX.png";
import TCS from "../image/TCS.png";
import Mahindra from "../image/Mahindra.png";
import Dell from "../image/Dell.png";
import amdocs from "../image/amdocs.png";
export default function Drives() {
    return (
        <>
            <div className='drive_body'>
                <div className="drive_card_title" >Available Drives</div>
                <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
                <div className='card_row'>
                    <div className='drive_card'>
                        <img src={Juspay} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                    <div className='drive_card'>
                        <img src={DeltaX} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                    <div className='drive_card'>
                        <img src={TCS} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                    <div className='drive_card'>
                        <img src={Mahindra} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='card_row'>
                    <div className='drive_card'>
                        <img src={Dell} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                    <div className='drive_card'>
                        <img src={amdocs} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                </div>
                <div className="drive_card_title" >Upcoming Drives</div>
                <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
                <div className='card_row'>
                    <div className='drive_card'>
                        <img src={Juspay} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                    <div className='drive_card'>
                        <img src={DeltaX} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                    <div className='drive_card'>
                        <img src={TCS} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                    <div className='drive_card'>
                        <img src={Mahindra} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='card_row'>
                    <div className='drive_card'>
                        <img src={Dell} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                    <div className='drive_card'>
                        <img src={amdocs} />
                        <div className='drive_card_content'>
                            <p className='company_name'>Juspay</p>
                            <p >Role: Full Stack Developer</p>
                            <p >CTC: 9 LPA</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}