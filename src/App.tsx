import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import Todo from './Todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <div>App</div>
      <TodoList />
      <TodoItem todo={todos}  />
      <AddTodo />
    </>
  );
};

export default App;
