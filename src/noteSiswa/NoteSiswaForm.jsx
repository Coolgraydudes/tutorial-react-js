import { useState, useContext } from "react";
import { NoteSiswaDispatchContext } from "./NoteSiswaContext";

export default function NoteSiswaForm() {
    const [nama, setNama] = useState('')
    const [umur, setUmur] = useState('')
    const [kelas, setKelas] = useState('')
    const dispatch = useContext(NoteSiswaDispatchContext)

    function handleClick() {
        if (nama && umur && kelas) {
            dispatch({ type: 'ADD_DATA', nama, umur, kelas});
            setNama(''); setUmur(''); setKelas('')
        } else {
            alert("Harap isi semua data")
        }
    }

    return (
        <div>
            <input type="text" placeholder="Nama" value={nama} onChange={e => setNama(e.target.value)} />
            <input type="text" placeholder="Umur" value={umur} onChange={e => setUmur(e.target.value)} />
            <input type="text" placeholder="Kelas" value={kelas} onChange={e => setKelas(e.target.value)} />
            <button onClick={handleClick} className="add-button">Tambah data</button>
        </div>
    )
}