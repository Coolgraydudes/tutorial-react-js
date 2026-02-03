import Todo from "./Todo"

    const data = [
        {   id : 0,
            text : "Learn HTML",
            isCompleted : true
        },
        {   id : 1,
            text : "Learn React",
            isCompleted : true
        },
        {   id : 2,
            text : "Learn Tailwind",
            isCompleted : true
        },
        {   id : 3,
            text : "Learn BostTrap",
            isCompleted : true
        }
    ]

export default function TodoList() {

    return (
        <ul>
            {/* <Todo text="Belajar React" isCompleted={false}/>
            <Todo text="Membuat Aplikasi" isCompleted={true} />
            <Todo text="Membuat web" isCompleted={true} isDeleted/> */}
            {data.map((todo) => (
                <Todo key={todo.id} {...todo}/>
            ))}

        </ul>
    )
}