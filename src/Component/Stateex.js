import React, { Component } from 'react'

export default class Stateex extends Component {
    
        constructor(props) {
          super(props)
        
          this.state = {
             count:0,
             name:"jam"
          }
        }
        
    
  render() {
    
    return (
        <div>
      <button onClick={()=>this.setState({count:this.state.count+1})}>Clickme{this.state.count}</button>
      <h1>this.state.name</h1></div>
    )
  }
}

