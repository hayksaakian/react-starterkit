import React from 'react';

class Tracker extends React.Component{

  constructor (props, context) {
    super(props);
    this.state = {
      user_agent: navigator.userAgent.toString(),
      ip_host: "",
      ip_address: "",
      plugins: {}      
    }
  }

  handlePlugins (e){
    this.setState({
      plugins: e.detail
    })
  }

  componentDidMount(){
    window.addEventListener("detected_plugins", this.handlePlugins);
  }

  render() {
    console.log(this.state)

    var plugins = (Object.keys(this.state.plugins) || []).map((p) => {
      return <li>{p}</li>
    })

    return (
      <div>
        <h3>Tracker JS</h3>
        <dl>
          <dt>User Agent</dt>
          <dd>
            {this.state.user_agent}
          </dd>
          <dt>Plugins</dt>
          <dd>
          </dd>
        </dl>
        <ol>
          {JSON.stringify(this.state.PLUGINS)}
        </ol>
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