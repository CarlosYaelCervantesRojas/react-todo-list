import PropTypes from 'prop-types';

export function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};