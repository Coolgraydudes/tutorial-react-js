// OreList.jsx
import { useState, useEffect } from "react";
import Ore from "./Ore";
import "./style.css"

export default function OreList() {
    const [ores, setOres] = useState([])
    const [load, setLoad] = useState(false)

    function handleClick() {
        setLoad(true)
    }

    useEffect(() => {
        if (load) {
            fetch("/Ores.json")
                .then((response) => response.json())
                .then((data) => setOres(data))
        }
    }, [load])

    return(
        <div className="main-container"> 
            <h1 className="title">Minecraft Ore List</h1>
            
            {!load && (
                <button className="fetch-button" onClick={handleClick}>
                    Show data
                </button>
            )}

            <div className="ores-grid">
                {ores.map((item) => 
                    <Ore key={item.id} ore={item}/>
                )}
            </div>
        </div>
    )
}