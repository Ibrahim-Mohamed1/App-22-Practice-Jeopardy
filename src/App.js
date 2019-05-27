import React, { Component } from 'react';
import { withData } from './DataProvider';
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      toggle: true
    }
  }
  componentDidMount(){
    this.props.getQuestions()
  }
  getQuestions = () => {
    this.props.getQuestions()
    this.setState({
      toggle: true
    })
  }
  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }
  render() {
    return (
      <div>
        <h1 style={{display:"block", margin: 20,color: "#0e81ff", }}>Practice Jeopardy</h1>
        <button className='next' onClick={this.getQuestions}>Next Question</button>
        <button className='punchline'  onClick={this.handleToggle }>Answer</button>
        <h2 style={{color: 'gold', textTransform: "capitalize"}}>{this.props.category.title} </h2>
        <h2 style={{color: 'white'}}>Value: <span style={{color: 'lime'}}>{this.props.question.value}</span></h2>
        <h1 className="question">{this.props.question.question}</h1>
        {this.state.toggle ? null : <h2>{this.props.question.answer}</h2>}
      </div>
    );
  }
}

export default withData(App);