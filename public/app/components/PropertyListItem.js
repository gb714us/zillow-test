import React, { Component, PropTypes } from 'react';

export default class PropertyListItem extends Component {
     static propTypes = {
        handleClick: PropTypes.func.isRequired
    }

    handlePropertyClick = () => {
        this.props.handleClick(this.props);
    }

    render() {
        let sourceImage = this.props.media ? this.props.media[0] : {url: 'https://semantic-ui.com/images/wireframe/image.png', shortDescription: "N/A"}
        return (
            <div className='ui card' onClick={this.handlePropertyClick}>
                <div className="image">
                    <img src={sourceImage.url} alt={sourceImage.shortDescription} />
                </div>
                <div className="content">
                    <a className="header">{this.props.address}</a>
                    <div className="meta">
                        <span className="date">{this.props.country}</span>
                    </div>

                </div>
                <div className="extra content">
                    <a>
                        <i className="dollar icon"></i>
                        {this.props.price.toLocaleString()}
                    </a>
                </div>
            </div>
        );
    }
}