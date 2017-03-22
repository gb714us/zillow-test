import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import PropertyDetails from './PropertyDetails';


export default class PropertyModal extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        closeHandler: PropTypes.func.isRequired
    }

    render() {
        let p = this.props.property;
        let sourceImage = p && p.media ? p.media[0] : { url: 'https://semantic-ui.com/images/wireframe/image.png', shortDescription: "N/A" }
        let modalActiveClass = 'ui fullscreen modal ' + (this.props.isOpen ? "visible active" : "")

        return p ? (
            <div className="ui dimmer modals page transition visible active">
                <div className={modalActiveClass} style={{ top: 0 }}>
                    <i className="close icon" onClick={this.props.closeHandler}></i>
                    <div className="header">
                        {p.address}
                    </div>
                    <div className="content">
                        <PropertyDetails property={p} />
                    </div>
                </div>
            </div>
        )
            : null;
    }
}