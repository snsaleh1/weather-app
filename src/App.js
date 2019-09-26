import React from 'react';
import Form from './components/form';
import Titles from './components/titles';
import Weather from './components/weather';

class App extends React.Component {
  render() {
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;