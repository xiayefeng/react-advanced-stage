import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Provider extends Component{
  getChildContext(){
    return this.props.store
  }
  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  }

  constructor(props){
    super(props)
    this.state = {
      name: 'provider-user'
    }
  }
  render(){
    return this.props.children
  }
}

class BaseUser extends Component{
  static contextTypes = {
    name: PropTypes.string
  }
  render(){
    return (
      <div>{this.props.name}</div>
    )
  }
}

class BasePost extends Component{
  static contextTypes = {
    age: PropTypes.string
  }
  render(){
    return (
      <div>{this.props.age}</div>
    )
  }
}

const connect = (Com) => {
  class ConnectComponent extends Component{
    static contextTypes = Provider.childContextTypes
    displayName = Com.displayName

    render(){
      return (
        // <Com name={this.context.name}>
        <Com {...this.context} />
      )
    }
  }
  return ConnectComponent
}

const User = connect(BaseUser)
const Post = connect(BasePost)

const store = {
  name: 'ryan',
  age: 10
}

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <User/>
        <Post/>
      </Provider>
    )
  }
}

export default App