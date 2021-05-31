import React from "react"
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
class ExtraCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    componentDidMount() {
        console.log("Mounting")
    }
    componentDidUpdate() {
        console.log("Component is updated!")
    }
    componentWillUnmount() {
        console.log("Component is about to die!")
    }

    handleSubtractCounter = () => {
        this.setState(function (state) {
            return {
                counter: state.counter - 1
            };

        })

    }

    handleResetCounter = () => {
        this.setState(function (state) {
            return {
                counter: 0
            };
        })

    }

    handleAddCounter = () => {
        this.setState(function (state) {
            return {
                counter: state.counter + 1
            };
        })
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.handleAddCounter}>add</button>
                <button onClick={this.handleSubtractCounter}>subtract</button>
                <button onClick={this.handleResetCounter}>reset</button>

            </div >
        )
    }
}


export default ExtraCounter