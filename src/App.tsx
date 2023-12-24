import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <div>App</div>
      <TodoList />
      <TodoItem />
      <AddTodo />
    </>
  );
};

export default App;
