import React, { Component } from 'react';
import Background from '../images/blimp1.png';
var sectionStyle = {
  width: "100%",
  height: "1300px",

  backgroundImage: `url(${Background})`
};
class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <section style={sectionStyle}>
        </section>
        <div id="404" className="404">
          <p>404</p>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
