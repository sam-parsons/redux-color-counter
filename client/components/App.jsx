import React from 'react';
import Color from './containers/Colors.jsx'
import Counter from './containers/Counter.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Color />
      <Counter />
    </div>)
  }
}

export default App;