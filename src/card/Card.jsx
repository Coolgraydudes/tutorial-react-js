export default function Card({imageUrl , title = "judul apa kek", ...data }) {
    return(
        <div className="card">
            <img src={imageUrl} alt="gambar-card" />
            <h2>{title}</h2>
            <p>{data.desc}</p>
            <button>{data.btn}</button>
        </div>
    )
}