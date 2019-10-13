import React, {Component} from 'react'

class Provider extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'provider-user'
    }
  }
  render(){
    return this.props.render(this.state.name)
  }
}

class User extends Component{
  render(){
    return (
      <div>{this.props.data}</div>
    )
  }
}

class App extends Component{
  render(){
    return (
      <Provider render={(data) => <User data={data} />} />
    )
  }
}

export default App