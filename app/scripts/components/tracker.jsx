import React from 'react';

class Tracker extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    var uas = navigator.userAgent.toString()
    var post_data = {
      user_agent: uas,
      ip_host: "",
      ip_address: "",
      plugins: window.PLUGINS,
      mimetypes: window.MIMES
    }

    return (
      <div>
        <h3>Tracker JS</h3>
        <dl>
          <dt>User Agent</dt>
          <dd>
            {uas}
          </dd>
          <dt>Plugins</dt>
          <dd>
            {window.PLUGINS}
          </dd>
        </dl>
        <div id="out">
        <div id="output1"></div>
        <div id="output2"></div>
        <div id="output3"></div>
        <div id="output4"></div>
        <div id="output5"></div>
        <div id="output6"></div>
        <div id="output7"></div>
        </div>
      </div>
    );
  }

}

Tracker.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Tracker;