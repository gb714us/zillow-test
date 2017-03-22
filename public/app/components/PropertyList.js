import React, { Component, PropTypes } from 'react';
import PropertyListItem from './PropertyListItem'

export default class PropertyList extends Component {
    static propTypes = {
        properties: PropTypes.array.isRequired,
        handleClick: PropTypes.func.isRequired,
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const items = this.props.properties.map(x => {
            return (<PropertyListItem {...x} key={x.id} handleClick={this.props.handleClick}/>)
        });

        return (
            <div className='ui link container centered cards'>
                {items}
            </div>)
    }
}