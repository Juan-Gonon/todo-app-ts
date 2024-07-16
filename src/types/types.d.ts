export interface Todo {
    id: string,
    completed: boolean,
    text: string
}

export type listOfTodos = Todo[]


export type TodoId = Pick<Todo, 'id'>
export type TodoText = Pick<Todo, 'text'>
export type TodoCompleted = Pick<Todo, 'completed'>