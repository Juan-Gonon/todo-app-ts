import { TODO_FILTERS } from "../constants"

export interface Todo {
    id: string,
    completed: boolean,
    text: string
}

export type listOfTodos = Todo[]


export type TodoId = Pick<Todo, 'id'>
export type TodoText = Pick<Todo, 'text'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type FILTER_VALUE = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export interface TodoContextType{
    todos: listOfTodos;
    handleRemoveTodo: ({ id} : TodoId) => void;
    handleCompletedTodo: ({ id, completed} : Pick<Todo, 'id' | 'completed'>) => void;
    filterSelected: FILTER_VALUE,
    activeCount: number;
    completedCount: number;
    handleFilterChange: (key: FILTER_VALUE) => void;
    handleRemoveAllCompleted: () => void;
}
