import React from 'react';
import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodosList from '../components/TodosList';

const Home = ({
  addTodoProps,
  handleChangeProps,
  deleteTodoProps,
  setUpdate,
  todos,
}) => (
  <div className="container">
    <div className="inner">
      <Header />
      <InputTodo addTodoProps={addTodoProps} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    </div>
  </div>
);

export default Home;
