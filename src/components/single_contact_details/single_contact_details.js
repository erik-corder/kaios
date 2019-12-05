import React, { Component } from 'react';


class SingleContactList extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
              </div>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <div class="uk-child-width-expand@s uk-text-center" uk-grid>
              <div>
                <div class="uk-card uk-card-default uk-card-body">Item</div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">Item</div>
              </div>
              <div>
                <div class="uk-card uk-card-default uk-card-body">Item</div>
              </div>
            </div>
          </div>
          <div class="uk-card-footer">
            <a href="#" class="uk-button uk-button-text">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleContactList;