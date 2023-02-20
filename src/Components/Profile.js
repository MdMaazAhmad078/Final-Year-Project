import React, { useState } from 'react';
import './Profile.css'
import { Row } from "reactstrap";
import { IoIosPerson } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";

export default function Profile() {

    const [presonalhide, setPresonalhide] = useState(false);
    const [educationhide, setEducationhide] = useState(false);
    const [skillshide, setSkillshide] = useState(false);

    const handlerEducation = (e) => {
        e.preventDefault();
        setEducationhide(true)
    }
    const handlerPresonal = (e) => {
        e.preventDefault();
        setPresonalhide(true)
    }
    const handlerSkills = (e) => {
        e.preventDefault();
        setSkillshide(true)
    }
    const handlerSetSkillsHide = (e) => {
        e.preventDefault();
        setSkillshide(false)
    }
    const handlerSetEducationHide = (e) => {
        e.preventDefault();
        setEducationhide(false)
    }
    const handlerSetPresonalHide = (e) => {
        e.preventDefault();
        setPresonalhide(false)
    }
    return (
        <div className='View_main'>
            <div className='view_head'>
                <IoIosPerson className='view_icon' />&nbsp; &nbsp;&nbsp; &nbsp;
                <div className='view_head_detail'>
                    <div className='view_name'>Maaz Ahmad</div>
                    <br /> <hr />
                </div>
            </div>
            <div className='view_details'>
                <div>
                    <div className='editRow'>
                        <div className='heading'>Presonal Details : </div>
                        <div className='editButton' onClick={handlerPresonal}><BiEditAlt style={{ marginLeft: "5px" }} /></div>
                    </div>
                    <br />
                    <Row className='Row' style={{ gap: "6rem" }}>
                        <div style={{ display: "flex" }}>
                            <div className='label'>Addhar Number :</div>&nbsp; &nbsp;345676567898
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className='label'>Phone Number :</div>&nbsp; &nbsp; 6756798767
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className='label'>Email :</div>&nbsp; &nbsp; mdmaazahmad20@gmail.com
                        </div>
                    </Row>
                    <br />
                    <Row className='Row' style={{ gap: "19.5rem" }}>
                        <div style={{ display: "flex" }}><div className='label'>Age :</div>&nbsp; &nbsp; 22</div>
                        <div style={{ display: "flex" }}><div className='label'>Gender :</div>&nbsp; &nbsp; male</div>
                    </Row>
                    {
                        presonalhide ?
                            <Row>
                                <div className='Control_Botton'>
                                    <div type="submit" className='Profile_s_btn' onClick={handlerSetPresonalHide}>Save</div>
                                    <div type="submit" className='Profile_s_btn' onClick={handlerSetPresonalHide}>Cancle</div>
                                </div>
                                <br /><br />
                            </Row>

                            : null
                    }

                </div>
                <br /> <hr /><br />
                <div>
                    <div className='editRow'>
                        <div className='heading'>Education : </div>
                        <div className='editButton' onClick={handlerEducation}><BiEditAlt style={{ marginLeft: "5px" }} /></div>
                    </div>
                    <br />
                    <Row style={{ gap: "6rem", fontSize: '1.4rem' }}>
                        <div style={{ display: "flex", justifyContent: 'space-between' }}>
                            <div className='right'>
                                <div className='label'>Bachelor Of Engineering </div>
                                <div>HKBK College Of Engineering</div>
                                <div>Computer Science And Engineering</div>
                            </div>
                            <div className='left'>
                                <div> 08/2019 - Present</div>
                                <div> Banglore,India</div>
                            </div>
                        </div>
                        <br />
                        <div style={{ display: "flex", justifyContent: 'space-between' }}>
                            <div className='right'>
                                <div className='label'>Higher Secondary Education </div>
                                <div>Gyan Bharti Senior Secondary</div>
                            </div>
                            <div className='left'>
                                <div> 2017 - 2019</div>
                                <div> Gaya,Bihar,India</div>
                            </div>
                        </div>
                        <br /> <div style={{ display: "flex", justifyContent: 'space-between' }}>
                            <div className='right'>
                                <div className='label'>Primary And Secondary Education </div>
                                <div>Elegent Public School</div>
                            </div>
                            <div className='left'>
                                <div> 2007 - 2017</div>
                                <div> Gaya,Bihar,India</div>
                            </div>
                        </div>
                    </Row>
                    {
                        educationhide ?
                            <Row>
                                <br />
                                <div className='Control_Botton'>
                                    <div type="submit" className='Profile_s_btn' onClick={handlerSetEducationHide}>Save</div>
                                    <div type="submit" className='Profile_s_btn' onClick={handlerSetEducationHide}>Cancle</div>
                                </div>
                                <br /><br />
                            </Row>

                            : null
                    }
                    <br /> <hr /><br /><div>
                        <div className='editRow'>
                            <div className='heading'>Skills : </div>
                            <div className='editButton' onClick={handlerSkills}><BiEditAlt style={{ marginLeft: "5px" }} /></div>
                        </div>
                        <br />
                        <Row style={{ gap: "6rem", fontSize: '1.4rem' }}>
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <div className='right'>
                                    <div className='label'>Languages </div>
                                    <div>Java, C, C++,Python, JavaScript, HTML,CSS, XML, Mysql</div>
                                </div>
                                <div className='Skill_left'>
                                    <div className='label'>Developer Tools </div>
                                    <div>VS Code, Android Studio, Sulbine</div>
                                </div>
                            </div>
                            <br />
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <div className='right'>
                                    <div className='label'>Frameworks/Technologies </div>
                                    <div>React.js, Spring, Bootstrap, Git, GitHub</div>
                                </div>
                                <div className='Skill_left'>
                                    <div className='label'>Soft Skills </div>
                                    <div>Critical Thinking, Leadership, Effective Communication,Teamwork, Decisiveness</div>
                                </div>
                            </div>
                            <br />
                        </Row>
                        {
                            skillshide ?
                                <Row>
                                    <br />
                                    <div className='Control_Botton'>
                                        <div type="submit" className='Profile_s_btn' onClick={handlerSetSkillsHide}>Save</div>
                                        <div type="submit" className='Profile_s_btn' onClick={handlerSetSkillsHide}>Cancle</div>
                                    </div>
                                    <br /><br />
                                </Row>

                                : null
                        }
                        <br /> <hr /><br />
                    </div>
                </div>
            </div>
        </div>

    );
}