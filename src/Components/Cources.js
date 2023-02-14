import React from 'react';
import "./Cources.css";
import JS from "../image/JS.png";
import reactlogo from "../image/reactlogo.png";
import Spring from "../image/Spring.png";
import Aptitude from "../image/Ap.jfif";

export default function header() {
    return (
        <>
            <div className='Cources_body'>
                <div className="Cources_card_title" >Recommended Cources</div>
                <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
                <div className='Cource_card_row'>
                    <div className='Cource_card' style={{ backgroundImage: "linear-gradient(-45deg, #ff2cdf 0%, #0014ff 100%)" }}>
                        <p>JAVASCRIPT</p>
                        <p style={{ fontSize: "12px", marginBottom: "12px" }}>JavaScript is the world's most popular programming language.</p>
                        <img src={JS} />
                    </div>
                    <div className='Cource_card' style={{ backgroundImage: "linear-gradient(-45deg, #ff2525 0%, #ffe53b 100%)" }}>
                        <p>SPRING</p>
                        <p style={{ fontSize: "12px", marginBottom: "12px" }}>Spring Framework is one of the most popular Java EE frameworks.</p>
                        <img src={Spring} style={{ height: "6rem" }} />
                    </div>
                    <div className='Cource_card' style={{ backgroundImage: "linear-gradient(-45deg, #1200ff 0%, #00e5ff 100%)" }}>
                        <p>REACT</p>
                        <p style={{ fontSize: "12px", marginBottom: "12px" }}>React is a JavaScript library for building user interfaces.</p>
                        <img src={reactlogo} style={{ height: "6rem" }} />
                    </div>
                </div>
                <div className='Cource_card_row'>
                    <div className='Cource_card' style={{ backgroundImage: "linear-gradient(-45deg, #2d27ff 0%, #ff0a6c 100%)" }}>
                        <p>APTITUDE</p>
                        <p style={{ fontSize: "12px", marginBottom: "12px" }}>An aptitude is a component of a competence to do a certain kind of work at a certain level.</p>
                        <img style={{ marginTop: "0px" }} src={Aptitude} />
                    </div>
                </div>
                <br/>
                <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
                <div className="Cources_card_title" >Additional Cources</div>
                <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
                <div className='Cource_card_row'>
                    <div className='Cource_card' style={{ backgroundImage: "linear-gradient(-45deg, #ff2cdf 0%, #0014ff 100%)" }}>
                        <p>JAVASCRIPT</p>
                        <p style={{ fontSize: "12px", marginBottom: "12px" }}>JavaScript is the world's most popular programming language.</p>
                        <img src={JS} />
                    </div>
                    <div className='Cource_card' style={{ backgroundImage: "linear-gradient(-45deg, #ff2525 0%, #ffe53b 100%)" }}>
                        <p>SPRING</p>
                        <p style={{ fontSize: "12px", marginBottom: "12px" }}>Spring Framework is one of the most popular Java EE frameworks.</p>
                        <img src={Spring} style={{ height: "6rem" }} />
                    </div>
                    <div className='Cource_card' style={{ backgroundImage: "linear-gradient(-45deg, #1200ff 0%, #00e5ff 100%)" }}>
                        <p>REACT</p>
                        <p style={{ fontSize: "12px", marginBottom: "12px" }}>React is a JavaScript library for building user interfaces.</p>
                        <img src={reactlogo} style={{ height: "6rem" }} />
                    </div>
                </div>
                <div className='Cource_card_row'>
                    <div className='Cource_card' style={{ backgroundImage: "linear-gradient(-45deg, #2d27ff 0%, #ff0a6c 100%)" }}>
                        <p>APTITUDE</p>
                        <p style={{ fontSize: "12px", marginBottom: "12px" }}>An aptitude is a component of a competence to do a certain kind of work at a certain level.</p>
                        <img style={{ marginTop: "0px" }} src={Aptitude} />
                    </div>
                </div>


            </div>
        </>
    );
}