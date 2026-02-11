import { useState, useContext } from "react";
import { NoteSiswaDispatchContext } from "./NoteSiswaContext";


export default function NoteSiswa({siswa}) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(NoteSiswaDispatchContext)

    function handleEdit(field, value) {
        dispatch({
            type: 'EDIT_DATA',
            id: siswa.id,
            nama: field === 'nama' ? value : siswa.nama,
            umur: field === 'umur' ? value : siswa.umur,
            kelas: field === 'kelas' ? value : siswa.kelas
        })
    }

    if (isEditing) {
        return (
            <tr>
                <td><input value={siswa.nama} onChange={e => handleEdit('nama', e.target.value)}/></td>
                <td><input value={siswa.umur} onChange={e => handleEdit('umur', e.target.value)}/></td>
                <td><input value={siswa.kelas} onChange={e => handleEdit('kelas', e.target.value)}/></td>
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
                <button onClick={() => dispatch({type: 'DELETE_DATA', id: siswa.id})} className="hapus">Hapus</button>
            </td>
        </tr>
    )
}