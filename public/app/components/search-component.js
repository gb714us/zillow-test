import React from 'react';

const DEFAULT_THROTTLE = 1000;

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: ''
        };
    }

    throttleInput(currentTimeout) {
        if (!currentTimeout) return;
        clearTimeout(currentTimeout);
    }

    handleChange(e) {
        /*
        wait until the user has typed in and avoid useless calls on api.

        we can also avoid this by using a message queue and assigning
        a unique id to each user and cancel any ongoing requests.

        */
        this.throttleInput(this.state.currentTimeOut)
        let currentTimeOut = setTimeout(() => {
            console.log(this.state.value);
            delete this.state.currentTimeOut;
        }, DEFAULT_THROTTLE)

        this.setState({
            value: e.target.value,
            currentTimeOut
        });
    }

    render() {
        return (
            <div className="ui icon input">
                <input placeholder='Type in your address' type='text' value={this.state.value} onChange={this.handleChange} />
                <i className="search link icon"></i>
            </div>
        )
    }
}