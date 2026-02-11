export default function ProfileForm({name, setName}) {
    function handleChange(event) {
        setName(event.target.value)
    }

    return(
        <>
            <input type="text" value={name} onChange={handleChange} />
        </>
    )
}