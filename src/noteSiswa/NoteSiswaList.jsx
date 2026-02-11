import NoteSiswa from "./NoteSiswa";
import { useContext } from "react";
import { NoteSiswaContext } from "./NoteSiswaContext";

export default function NoteSiswaList({}) {
    const siswaList = useContext(NoteSiswaContext)

    return (
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Umur</th>
                    <th>Kelas</th>
                    <th>Act</th>
                </tr>
            </thead>

            <tbody>
                {siswaList.map(itemSiswa => (
                    <NoteSiswa
                        key={itemSiswa.id}
                        siswa={itemSiswa}
                    />
                ))}    
            </tbody>    
        </table>
    )
}