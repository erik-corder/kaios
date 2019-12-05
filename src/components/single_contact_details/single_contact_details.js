import React, { Component } from 'react';

import Nav from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/footer';


class SingleContactList extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }

  render() {
    return (
     
      <div>
        <Nav />
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
          <div class="icon-set" uk-gird>

            <div class="uk-card uk-card-default uk-card-body card">
              <i class="fa fa-phone icons" aria-hidden="true"></i>
              <br />
              Call
              </div>


            <div class="uk-card uk-card-default uk-card-body card">
              <i class="fa fa-weixin icons" aria-hidden="true"></i>
              <br />
              Message
            </div>


            <div class="uk-card uk-card-default uk-card-body card">
              <i class="fa fa-video-camera icons" aria-hidden="true"></i>
              <br />
              Video
            </div>


            <div class="uk-card uk-card-default uk-card-body card">
              <i class="fa fa-envelope icons" aria-hidden="true"></i>
              <br />
              Mail
            </div>

          </div>
          {/*   <hr class="uk-divider-small"></hr> */}
          <table class="uk-table uk-table-divider">
            <thead>

            </thead>
            <tbody>
              <tr>
                <td className="details">
                  <p className="pho-num"> 078 584 2655 </p>
                  <p className="mob">Mobile</p>
                </td>
                <td className="datils Icons"><i class="fa fa-phone icons" aria-hidden="true"></i></td>
              </tr>
              <tr>
                <td className="details">
                  <p className="pho-num"> +94 11 584 2655 </p>
                  <p className="mob">Home</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="details">
                  <p className="pho-num"> Recent </p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="details">
                  <p className="pho-num"> 078 584 2655 </p>
                  <p className="mob incom-call"><i class="fa fa-arrow-down" aria-hidden="true"></i></p>
                  <div>
                    <p className="mob recent-details">
                      Mobitel <br />
                      5:57 a.m <br />
                      o min 52s
                  </p>
                  </div>
                </td>
                <td className="datils Icons"><i class="fa fa-phone icons" aria-hidden="true"></i></td>
              </tr>
              <tr>
                <td className="details">
                  <p className="pho-num"> 078 584 2653 </p>
                  <p className="mob incom-call"><i class="fa fa-arrow-up" aria-hidden="true"></i></p>
                  <div>
                    <p className="mob recent-details">
                      Mobitel <br />
                      5:57 a.m <br />
                      o min 52s
                  </p>
                  </div>
                </td>
                <td className="datils Icons"><i class="fa fa-phone icons" aria-hidden="true"></i></td>
              </tr> 
            </tbody>
          </table>
        </div>
        <Footer />
      </div>     
    );
  }
}

export default SingleContactList;