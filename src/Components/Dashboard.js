import React from 'react';
import "./Dashboard.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ProgressBar from './ProgressBar';

export default function header() {

    const state = {
        size: 200,
        progress: 82.2,
        strokeWidth: 15,
        circleOneStroke: '#d9edfe',
        circleTwoStroke: '#7ea9e1'
    }

    return (
        <>
            <div className='body'>
                <div className='upper_body'>
                    <div className='upper_left_body'>
                        <div className="table_card_title" >Upcoming News</div>
                        <div className="table_card">
                            <TableContainer className="bg_d" style={{ boxShadow: 'none' }}>
                                <Table aria-label="collapsible table" className="bg_d" >
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>Windows</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>Windows</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>Windows</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>Windows</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                    <div className='upper_right_body'>
                        <div className="table_card_title" >Placement Chances</div>
                        <ProgressBar {...state} style={{ marginLeft: "2rem" }} />
                    </div>
                </div>
                <div className='lower_body'>
                    <div className='lower_left_body'>
                        <div className="lower_body_card_title" >JD Recommendation</div>
                        <div className='jd_card'>
                            <div className='card'>
                                <div className='card_name'>Web Developer</div>
                            </div>
                            <div className='card'>
                                <div className='card_name'>Frontend Developer</div>
                            </div>
                            <div className='card'>
                                <div className='card_name'>Data Analytis</div>
                            </div>
                        </div>
                        <div className='jd_card'>
                            <div className='card'>
                                <div className='card_name'>Database Management</div>
                            </div>
                        </div>
                    </div>
                    <div className='lower_right_body'>
                        <div className="table_card_title" >LeaderBoard</div>
                        <div className="leader_table_card">
                            <TableContainer className="bg_d" style={{ boxShadow: 'none',overflowY:"scroll" ,height:"12rem"}}>
                                <Table aria-label="collapsible table" className="bg_d" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem', padding: "13px 1px 13px 1px",color: "rgb(6 122 107)" ,width:"20%" }}>Rank</TableCell>
                                        <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)"  }}>Name</TableCell>
                                        <TableCell align="center" style={{ fontWeight: '600', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)"  }}>USN</TableCell>
                                    </TableRow>
                                </TableHead>
                                    <TableBody>
                                    <TableRow>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)",width:"20%" }}>1</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>Krishnakant Dev</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>1HK19CS070</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)",width:"20%" }}>2</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>Laraib Khan</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>1HK19CS072</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)",width:"20%" }}>3</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>Md Maaz Ahmad</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>1HK19CS078</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)",width:"20%" }}>4</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>Md Taukir</TableCell>
                                            <TableCell align="center" style={{ fontWeight: '500', fontSize: '0.97rem', padding: "13px 1px 13px 1px", color: "rgb(6 122 107)" }}>1HK19CS081</TableCell>
                                        </TableRow>
                                     
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}