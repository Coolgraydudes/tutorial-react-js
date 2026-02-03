export default function ToolBar({onClick}) {
    return(
        <div onClick={onClick}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Seacond</button>
        </div>
    )
}