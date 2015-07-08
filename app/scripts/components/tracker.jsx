import React from 'react';


class Plugin extends React.Component {
  constructor (props, context) {
    super(props)

  }
  render(){
    var p = this.props
    var mimes = (this.props.mimetypes || []).map((m) => {
      return <li>{m.description} {m.suffixes} {m.type}</li>
    })

    return (
      <div>
        <p>
          <strong>{p.name} ({p.filename})</strong>  {p.description}
        </p>
        <ol>
          {mimes}
        </ol>
      </div>
    )
  }
}


class Tracker extends React.Component{

  constructor (props, context) {
    super(props);
    this.state = {
      user_agent: navigator.userAgent.toString(),
      ip_host: "",
      ip_address: "",
      plugins: []      
    }
  }

  componentDidMount(){
    window.addEventListener("detected_plugins", (e) => {
      console.log("detected_plugins", e)
      this.setState({
        plugins: e.detail
      })
    });
    // if(window.DetectPlugins){
    //   window.DetectPlugins()
    // }
  }

  render() {
    console.log('re-render', this.state)

    var plugins = (this.state.plugins || []).map((p) => {
      return <li><Plugin {...p} /> </li>
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
          {plugins}
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