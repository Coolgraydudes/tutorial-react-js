import { useImmerReducer } from "use-immer";
import { NoteSiswaContext, NoteSiswaDispatchContext } from "./NoteSiswaContext";
import NoteSiswaForm from "./NoteSiswaForm";
import NoteSiswaList from "./NoteSiswaList";
import "./style.css"

let id = 1;
const initialSiswa = [
    {id: 0, nama: "Fulan", umur: 17, kelas: "12"}
]

function siswaReducer(draft, action) {
    if(action.type === 'ADD_DATA') {
        draft.push({
            id: id++,
            nama: action.nama,
            umur: action.umur,
            kelas: action.kelas
        });
    } else if (action.type === 'DELETE_DATA') {
        const index = draft.findIndex(siswa => siswa.id === action.id);
        if (index !== -1) draft.splice(index, 1)
    } else if (action.type === 'EDIT_DATA') {
        const index = draft.findIndex(siswa => siswa.id === action.id);
        if (index !== -1) {
            draft[index].nama = action.nama;
            draft[index].umur = action.umur;
            draft[index].kelas = action.kelas;
        }
    }
}

export default function NoteSiswaApp() {
    const [siswaList, dispatch] = useImmerReducer(siswaReducer, initialSiswa)


    return (
        <NoteSiswaContext.Provider value={siswaList}>
            <NoteSiswaDispatchContext.Provider value={dispatch}>
                <div>
                    <h1>Data Siswa</h1>
                    <NoteSiswaForm/>
                    <NoteSiswaList/>
                </div>
            </NoteSiswaDispatchContext.Provider>
        </NoteSiswaContext.Provider>
    )
}