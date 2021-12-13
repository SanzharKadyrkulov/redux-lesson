import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./store/actions/todoActions";
const App = () => {
  const {
    todo: { todos, loading: todoLoad, error: todoErr },
    user: { users, loading: userLoad, error: userErr },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  if (todoErr) {
    return <h1>some error occured</h1>;
  }
  return (
    <div>
      {todos ? (
        todos.map((todo) => <h2 key={todo.id}>{todo.title}</h2>)
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default App;
