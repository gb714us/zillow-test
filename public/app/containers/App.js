import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import Header from '../components/Header';
import PropertyList from '../components/PropertyList';
import PropertyModal from '../components/PropertyModal';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            address: '37 Gates St #263, San Francisco, CA, 94110',
            modalIsOpen: false,
            selectedProperty: null
        };

        this.requestData(this.state.address);
    }

    updateFromRequest = (address, data) => {
        this.setState({
            properties: data,
            address
        })
    }

    requestData = (address) => {
        if (!address) {
            this.setState({ properties: null, address })
        }
        else {
            fetch(`/locations/${encodeURIComponent(address)}`)
                .then(res => { console.log(res); return res.json() })
                .then(result => {
                    if (result.result && result.data) {
                        console.log(result.data)
                        this.updateFromRequest(address, result.data);
                    }
                    else {
                        this.setState({ properties: null, address })
                    }
                })
        }
    }

    handleModalClick = (property) => {
        this.setState({modalIsOpen: true, selectedProperty: property});
    }

    handleModalClose = () => {
        this.setState({modalIsOpen: false, selectedProperty: null});
    }


    renderBody = () => {
        return (
            this.state.properties && this.state.properties.length > 0
                ? <PropertyList properties={this.state.properties} handleClick={this.handleModalClick}/>
                : <div className="ui negative message">
                    <i className="close icon"></i>
                    <div className="header">
                        No results available for that address.
                    </div>
                    <ul className="list">
                        <li>{this.state.address || "Please enter an address"}</li>
                    </ul>
                </div>)
    }

    render() {

        return (
            <div>
                <PropertyModal closeHandler={this.handleModalClose} 
                                isOpen={this.state.modalIsOpen}
                                property={this.state.selectedProperty}/>
            <div className='content'>
                <Header requestData={this.requestData} />
                <div className='content__body ui container'>
                    <h2 className="ui header">
                        <i className="search icon"></i>
                        <div className="content">
                            Results
                        </div>
                    </h2>
                    <hr />
                    {this.renderBody()}
                </div>
                
            </div>
            </div>

        )
    }
}
