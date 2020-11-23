import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from "../components/navbar/Navbar";
import { Game } from "../components/game/game";

import './app.css'

class App extends React.Component {



    render() {
        return (
            <>
                <Navbar/>
                <Game/>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
