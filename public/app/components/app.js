import React from 'react';
import SearchComponent from './search-component';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div className="ui fixed menu">
                <div className="ui container">
                    <a className="header item" href='/'>
                        <img src="http://www.zillowstatic.com/static/images/m/apple-touch-icon.png" alt="" />
                    </a>
                    <div className='item'>
                        <h3>Zillow Retsly Application</h3>
                    </div>
                    <div className='right menu'>
                        <div className="item">
                            <SearchComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}