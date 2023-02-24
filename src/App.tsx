import cn from 'classnames';

import styles from './app.module.scss';

function App() {
  return (
    <div className="App">
      <h1 className={cn(styles.red)}>Hello world</h1>
      <form action="">
        <input
          type="text"
          name="name"
          id="input"
          className="input"
          aria-describedby="name_info"
        />
      </form>
    </div>
  );
}

export default App;
