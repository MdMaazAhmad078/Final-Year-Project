import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p
                    style={{
                        padding: "20px",
                        borderRadius: "10px",
                        marginTop:"1rem",
                        overflow: "hidden",
                        boxShadow: "0px 6px 18px -9px rgba(0, 0, 0, 0.75)",
                        // backgroundColor: "#F3F1F5",
                        fontSize: "0.8rem",
                        textAlign: "center"
                    }}
                >
                    All Rights Reserved. PLACEMENT MANAGEMENT, RECOMMENDATION & PREDICTION SYSTEM © 2022 | HKBK COLLEGE OF ENGINEERING © V1.0.0
                    <br />
                    info@hkbkeducation.org
                </p>
            </div>
        );
    }
}
