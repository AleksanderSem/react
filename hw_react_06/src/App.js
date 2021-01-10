import React from 'react';
import { Provider } from 'react-redux';
import Registration from './containers/Registration';
import ChangeTheme from './containers/ChangeTheme'
import store from './store/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        {/* <button onClick={() => console.log(store.getState())}>Get Store</button> */}
        <ChangeTheme />
        <Registration />
      </div>
    </Provider>
  );
}

export default App;
