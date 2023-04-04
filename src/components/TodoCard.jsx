export function TodoCard({todo}) {
    return (
        <>
            {todo && (
                <div>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                </div>
            )}
        </>
    )
}