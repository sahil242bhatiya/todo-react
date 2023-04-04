export const verifyTodoObject = (todo) => {
    return !(todo.title.trim().length === 0 || todo.description.trim().length === 0);
}