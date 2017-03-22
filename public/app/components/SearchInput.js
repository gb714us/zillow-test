import React, {Component, PropTypes} from 'react';

const DEFAULT_THROTTLE = 500;

export default class SearchInput extends Component {
    static propTypes = {
        requestData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            value: "37 Gates St #263, San Francisco, CA, 94110"
        }
    }

    triggerData = () => {
        this.props.requestData(this.state.value)
    }

    handleChange = e => {
        /*
        wait until the user has typed in and avoid useless calls on api.

        we can also avoid this by using a message queue and assigning
        a unique id to each user and cancel any ongoing requests.

        */
        this.throttleInput(this.state.currentTimeOut)
        let currentTimeOut = setTimeout(() => {
            this.triggerData();
            delete this.state.currentTimeOut;
        }, DEFAULT_THROTTLE)

        this.setState({
            value: e.target.value,
            currentTimeOut
        });
    }

    throttleInput(currentTimeout) {
        if (!currentTimeout) return;
        clearTimeout(currentTimeout);
    }

    render() {
        return (
            <div className="ui wide icon input">
                <input className='nav__search nav__search--wide' placeholder='Type in your address' type='text' value={this.state.value} onChange={this.handleChange} />
                <i className="search link icon"></i>
            </div>
        )
    }
}