import NoteSiswa from "./NoteSiswa";

export default function NoteSiswaList({ siswaList, onChange, onDelete}) {
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
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                ))}    
            </tbody>    
        </table>
    )
}