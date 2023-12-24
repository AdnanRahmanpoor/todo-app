import Todo from '../Todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div className='card my-2'>
      <div className='card-body'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          className='m-3'
        >
          {todo.text}
        </span>
        <button
          onClick={() => deleteTodo(todo.id)}
          className='btn btn-danger btn-sm float-right'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
