import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './index.css'

//state
//lifecycle events
//UI

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'))
