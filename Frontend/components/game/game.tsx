import React, {ChangeEvent, FormEvent, useState} from "react";
import './game.css'
import Player from "./player/Player";

export function Game() {

    const [name, setName] = useState<string>("missingPlayerName")
    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const initPlayer = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const player = new Player(name)
    }

    return (
        <div className={"gameContainer"}>
            <div className={"gameCreate"}>
                <h2>Willkommen bei Werwolf Online</h2>
                <p>Werwolf Online basiert auf dem Spiel von die "Werwölfe von Düsterwald"</p>
                <p>Gebe nun als erstes einen Namen ein</p>
                <form onSubmit={(event) => initPlayer(event)}>
                    <input type={"text"} placeholder={"Name"} onChange={(event) => handleName(event)} required/>
                    <input type={"submit"} value={"Spielen"}/>
                </form>

            </div>
        </div>
    )
}
