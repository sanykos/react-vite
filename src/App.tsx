import cn from 'classnames';
import { useEffect } from 'react';

import styles from './app.module.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  // const {} = useSelector(state => state)
  // const {} = useAppSelector(state => state)

  const { count, users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const { increment, decrement } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <h1 className={cn(styles.red)}>{count}</h1>
      <button onClick={() => dispatch(increment(5))}>increment</button>
      <button
        onClick={() => {
          if (count > 0) dispatch(decrement(5));
        }}
      >
        decrement
      </button>
      {isLoading && <h1>Идет загрузка</h1>}
      {error && <h1>Ошибка: {error}</h1>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
