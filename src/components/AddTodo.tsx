import { useState } from 'react';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='mx-auto my-4 d-flex justify-content-center'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add a new Todo'
          className='form-control d-inline w-50'
        />
        <button className='btn btn-primary mx-2 w-15' type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
