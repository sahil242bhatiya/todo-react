export const verifyTodoObject = (todo) => {
    return !((typeof todo.title !== 'string' && todo.title.length === 0) || (typeof todo.description !== 'string' && todo.description.length === 0));
}