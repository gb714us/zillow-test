import React, { Component, PropTypes } from 'react';

export default class PropertyDetails extends Component {
    static propTypes = {
        property: PropTypes.object.isRequired,
    }

    renderImages = () => {
        let images = this.props.property.media || [{ url: 'https://semantic-ui.com/images/wireframe/image.png', shortDescription: "N/A", mlsMediaID: 1 }]

        return (
            <div>
                <h3 className="ui header">Images</h3>
                <div className="ui small images container centered">
                    {images.map(x => {
                        return <img src={x.url} alt={x.shortDescription} key={x.mlsMediaID} />
                    })}
                </div>
            </div>
        )
    }

    render() {
        let p = this.props.property;
        return (
            <div className='ui container' onClick={this.handlePropertyClick}>
                {this.renderImages()}
                <div className="content">
                    <div className="ui two column grid">
                        <div className="column">
                            <div className="ui raised segment">
                                <a className="ui red ribbon label">Property Details</a>
                                <table className="ui definition compact table">
                                    <tbody>
                                        <tr>
                                            <td>Status</td>
                                            <td>{p.status}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>${p.price.toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                            <td>Previous Price</td>
                                            <td>${p.previousPrice.toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                            <td>Original Price</td>
                                            <td>${p.originalPrice.toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                            <td>Year Built</td>
                                            <td>{p.yearBuilt}</td>
                                        </tr>
                                        <tr>
                                            <td>Days on Market</td>
                                            <td>{p.daysOnMarket}</td>
                                        </tr>
                                         <tr>
                                            <td>Appliances</td>
                                            <td>{(p.appliances || []).join(', ')}</td>
                                        </tr>
                                         <tr>
                                            <td>Sqft.</td>
                                            <td>{p.squareFootage}</td>
                                        </tr>
                                        <tr>
                                            <td>Property Type</td>
                                            <td>{p.subtype}</td>
                                        </tr>
                                         <tr>
                                            <td>Stories</td>
                                            <td>{p.storiesTotal}</td>
                                        </tr>
                                         <tr>
                                            <td>Bedrooms</td>
                                            <td>{p.bedrooms}</td>
                                        </tr>
                                        <tr>
                                            <td>Bathrooms</td>
                                            <td>{p.baths}</td>
                                        </tr>
                                         <tr>
                                            <td>Architectural Style</td>
                                            <td>{(p.architecturalStyle || []).join(', ')}</td>
                                        </tr>
                                         <tr>
                                            <td>Flooring</td>
                                            <td>{(p.flooring || []).join(', ')}</td>
                                        </tr>
                                          <tr>
                                            <td>Heating</td>
                                            <td>{(p.heating || []).join(', ')}</td>
                                        </tr>
                                         <tr>
                                            <td>Cooling</td>
                                            <td>{p.cooling}</td>
                                        </tr>
                                        <tr>
                                            <td>Pool</td>
                                            <td>{p.pool ?"Yes" : "No"}</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui segment">
                                <a className="ui orange right ribbon label">Listing Agent Details</a>
                                <table className="ui definition compact table">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{p.listingAgentFullName}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone Number</td>
                                            <td>{p.listingAgentPhone}</td>
                                        </tr>
                                        <tr>
                                            <td>Office</td>
                                            <td>{p.listingOfficeName}</td>
                                        </tr>
                                        <tr>
                                            <td>Office Number</td>
                                            <td>{p.listingOfficePhone}</td>
                                        </tr>
                                    </tbody></table>
                                <a className="ui teal right ribbon label">Extras</a>
                                <table className="ui definition compact table">
                                    <tbody>
                                        <tr>
                                            <td>Association</td>
                                            <td>{p.association ? `Yes, ${p.associationName}-($ ${p.associationFee})` : "No"}</td>
                                        </tr>
                                        <tr>
                                            <td>Allows Pets</td>
                                            <td>{(p.petsAllowed || []).indexOf("Yes") === -1 ? "No" : "Yes"}</td>
                                        </tr>
                                        <tr>
                                            <td>Garage Space</td>
                                            <td>{p.garageSpaces}</td>
                                        </tr>
                                        <tr>
                                            <td>Attached Garage</td>
                                            <td>{p.attachedGarage ? "Yes" : "No"}</td>
                                        </tr>
                                        <tr>
                                            <td>Public Remarks</td>
                                            <td>{p.publicRemarks}</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}