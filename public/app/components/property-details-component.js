import React from 'react';

export default class PropertyDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        return (
            <div className=''>
                <code>
                {JSON.stringify(this.state.data, '\n')}
                </code>
            </div>
        )

    }
}