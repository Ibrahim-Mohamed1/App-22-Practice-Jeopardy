import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            question: [],
            category: []
        }
    }

    getQuestions = () => {
        axios.get(`https://vschool-cors.herokuapp.com?url=http://jservice.io/api/random`).then(res => {
          console.log(res.data)
            this.setState({
                question: res.data[0],
                category: res.data[0].category  
            })
        })
    }

    render() {
        console.log(this.state, "FUCKKKK")
        return (
            <Provider value={{
                getQuestions: this.getQuestions,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}