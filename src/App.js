import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import FormContainer from './components/Form/FormContainer'
import TileContainer from './components/Tile/TileContainer'

import './App.css';

function App() {
  return (
   <Provider store={store}>
      <div className="App">
        <FormContainer />
        <TileContainer />
      </div>
   </Provider>
  );
}

export default App;
