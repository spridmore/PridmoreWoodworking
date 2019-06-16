import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Header extends Component {
    render() {
        return (
            <div style={{ paddingTop: "25px", background: "rgb(0,0,0,.4" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <img style={{ height: "40px", borderRadius: "1px", paddingBottom: "12px" }} src="./Assets/masthead.png"></img>
                    <span style={{ fontSize: "35px", fontFamily: "Cinzel", paddingBottom: "10px" }}>Pridmore Woodworks</span>
                </div>
                <NavBar />
            </div>
        )
    }
}