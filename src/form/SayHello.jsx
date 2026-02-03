export default function SayHello() {
    return(
        <>
            <div>
                <form action="">
                    <input id="input_name" type="text" />
                    <button onClick={
                        (e) =>{
                            e.preventDefault();
                            const name = document.getElementById("input_name").value;
                            document.getElementById("text_hello").innerHTML = `Hello ${name}`
                        }
                    }>
                        Say Hello!
                    </button>
                </form>
                <h1 id="text_hello">Hello world</h1>
            </div>
        </>
    )
}