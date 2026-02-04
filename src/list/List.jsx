import { useState } from "react";
import "./list.css";

export default function List() {

const [name, setName] = useState("")
const [list, setList] = useState([])

    function handleChange(e) {
        setName(e.target.value)
    }
    function handleClick(e) {

        e.preventDefault();

        setList([...list, name])
        setName("")
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleChange}/>
            <button onClick={handleClick}>Tambah</button>

            <table>
                <tbody>
                    
                        {list.map((item,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}