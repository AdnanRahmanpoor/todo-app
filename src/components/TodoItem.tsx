import { useState } from 'react';
import Todo from '../Todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editedText);
    setEditing(false);
  };

  return (
    <div className='card my-2'>
      <div className='card-body'>
        {isEditing ? (
          // eslint-disable-next-line react/style-prop-object
          <div
            className='d-flex flex-row
           align-items-center justify-content-between'
            style={{ width: '30rem', height: '2rem' }}
          >
            <div className='flex-grow-1 m-2'>
              <input
                type='text'
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className='form-control'
              />
            </div>
            <div className=''>
              <button
                onClick={handleSave}
                className='btn btn-success'
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div
            className='d-flex flex-row justify-content-between align-items-center'
            style={{ width: '30rem', height: '2rem' }}
          >
            <div>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
                className='m-3'
              >
                {todo.text}
              </span>
            </div>
            <div>
              <button
                onClick={handleEdit}
                className='btn btn-warning mx-2'
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className='btn btn-danger'
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
