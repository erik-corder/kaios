import React, { Component } from 'react';

class Footer extends React.Component {

    componentDidMount() {
        // Focus to the anchor, press 'Enter' should open a new webpage

    }

    render() {
        return (
            <div className="uk-section-small  footer">
                <hr className="uk-margin-remove" />
                <div className="uk-container uk-align-center uk-margin-remove-bottom uk-position-relative">
                    <div className="uk-grid" >
                        <div className="uk-width-1-3@m uk-width-1-2@s uk-first-column">
                            {/* <a href="#" className="uk-link-heading uk-text-lead uk-text-bold"><Image className="ippf-logo" src={require('../../assets/images/ippf-logo.png')} fluid /></a> */}
                            <div className="uk-width-xlarge tm-footer-description">
                                The SEE Platform enables members to get informed
                                across a range of subjects spanning the industry.
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Footer;