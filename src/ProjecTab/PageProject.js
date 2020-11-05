import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown'

function PageProject() {
    return(
        <main>
        
        <Terms/>
        </main>
    );
}


class Terms extends Component {
    constructor(props) {
      super(props)
  
      this.state = { terms: null }
    }
  
    componentWillMount() {
      fetch(`https://raw.githubusercontent.com/zenraiching/TollGateJava/master/README.md`).then((response) => response.text()).then((text) => {
        this.setState({ terms: text })
      })
    }
  
    render() {
      return (
        <div className="content">
          <ReactMarkdown source={this.state.terms} />
        </div>
      )
    }
  }
  
export default PageProject;