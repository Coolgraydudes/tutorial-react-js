import { useState } from "react";

export default function NoteSiswaForm({onAddSiswa}) {
    const [nama, setNama] = useState('')
    const [umur, setUmur] = useState('')
    const [kelas, setKelas] = useState('')

    function handleClick() {
        if (nama && umur && kelas) {
            onAddSiswa(nama, umur, kelas);
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