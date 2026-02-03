import Card from "../card/Card"
import TodoList from "../todo/TodoList"

function HelloWorld() {
    const props = {
        text : "Helo world",
        text2 : "Halo dunia"
    }

    const dataDiri = {
        nama : "izzam",
        age : "16",
        place : "jakarta"
    }

    const dataCard = {
        imageUrl : " ",
        title : "Card menggunakan  spread syntax",
        desc : "ini adalah card menggunakan spread syntax",
        btn : "click saya"
    }

    return(
    <>
        <HeaderHelloWorld text = "Hello"/>
        <DescriptionHelloWorld decs="Naaah klo ini props"/>
        <StyleHelloWorld {...props}/>
        <DataDiri {...dataDiri}/>
        <Card {...dataCard}/>
        <TodoList/>
    </>
    )

}

export default HelloWorld

export function HeaderHelloWorld(props) {

    const text = 'Hello World'

    return(
        <h1>{props.text.toUpperCase()}</h1>
    )
}

export function DescriptionHelloWorld({decs = "Ups belum isi text :v"}) {
    // const decs = 'Belajar ReactJS'

    return(
        <p>{decs.toLowerCase()}</p>
    )
}

// export function StyleHelloWorld() {
//     const text = 'Saya bisa ReactJS'
//     const style = {
//         color: 'blue',
//         backgroundColor : 'yellow'
//     }

//     return (
//         <p style={style}>{text.toLowerCase()}</p>
//     )
// }

export function StyleHelloWorld(props) {

    return (
        <>
            <p style={{color: 'red', background: 'yellow'}}>{props.text}</p>
            <p>{props.text2}</p>
        </>

    )
}
export function DataDiri(dataDiri) {
    return(
        <>
            <p>{dataDiri.nama}</p>
            <p>{dataDiri.age}</p>
            <p>{dataDiri.place}</p>
        </>
    )
}