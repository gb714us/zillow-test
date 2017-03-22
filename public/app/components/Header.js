import React, { PropTypes, Component } from 'react'
import SearchInput from './SearchInput'

export default class Header extends Component {
    static propTypes = {
        requestData: PropTypes.func.isRequired
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
                    <div className='fluid right menu'>
                        <div className="item">
                            <SearchInput requestData={this.props.requestData} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}