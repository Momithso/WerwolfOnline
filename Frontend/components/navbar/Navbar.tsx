import React from "react";
import logo from '../../assets/logo.png'
import './navbar.css'

export default class Navbar extends React.Component{

    render() {
        return(
            <nav className={"navBar"}>
                <div className={"navBarHeading"}>
                    <img src={logo}/>
                    <h1>Werwolf Online</h1>
                </div>
            </nav>
        )
    }
}
