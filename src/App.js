import React, { Component } from 'react';
import MenuHeader from './component/MenuHeader.js';
import MenuBody from './component/MenuBody.js';
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div>
       

        


          { routes }
      </div>
    );
  }
}

export default App;
