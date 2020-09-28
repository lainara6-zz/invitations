import React from 'react';
import {useHistory} from 'react-router-dom'

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <button type='button' onClick={() => history.push('/list')}>List</button>
    </div>
  );
}

export default App;
