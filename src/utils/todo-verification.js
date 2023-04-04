export const verifyTodoObject = (todo) => {
    if (typeof todo.title !== 'string') {
        throw new Error('Todo title must be a string');
    }
    if (typeof todo.description !== 'string') {
        throw new Error('Todo description must be a string');
    }
    if (typeof todo.completed !== 'boolean') {
        throw new Error('Todo completed must be a boolean');
    }
    if (typeof todo.timestamp !== 'object') {
        throw new Error('Todo timestamp must be an object');
    }
    if (typeof todo.timestamp.seconds !== 'number') {
        throw new Error('Todo timestamp seconds must be a number');
    }
    if (typeof todo.timestamp.nanoseconds !== 'number') {
        throw new Error('Todo timestamp nanoseconds must be a number');
    }
    return true;
}