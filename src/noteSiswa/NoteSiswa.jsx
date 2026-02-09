import { useState } from "react";

export default function NoteSiswa({siswa, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <tr>
                <td><input value={siswa.nama} onChange={e => onChange({...siswa, nama: e.target.value})}/></td>
                <td><input value={siswa.umur} onChange={e => onChange({...siswa, umur: e.target.value})}/></td>
                <td><input value={siswa.kelas} onChange={e => onChange({...siswa, kelas: e.target.value})}/></td>
                <td>
                    <button onClick={() => setIsEditing(false)} className="save">Save</button>
                </td>
            </tr>
        )
    }

    return (
        <tr>
            <td>{siswa.nama}</td>
            <td>{siswa.umur}</td>
            <td>{siswa.kelas}</td>
            <td>
                <button onClick={() => setIsEditing(true)} className="edit">Edit</button>
                <button onClick={() => onDelete(siswa)} className="hapus">Hapus</button>
            </td>
        </tr>
    )
}