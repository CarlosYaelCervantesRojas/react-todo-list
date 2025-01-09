import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul>
            {todos.length === 0 && "No Items"}
            {todos.map(todo => {
                return (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        toggleTodo={toggleTodo} 
                        deleteTodo={deleteTodo} 
                    />
                )
            })}
        </ul>
    );
}

TodoList.propTypes = { 
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};