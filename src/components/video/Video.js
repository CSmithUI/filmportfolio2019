import React from 'react';
import './Video.css'

class Video extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>
            <iframe 
                title={ this.props.video.id }
                className="videoFrame"
                src={ this.props.video.urlLink } 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope" 
                allowFullScreen>
            </iframe>
            <br />
            <span>{ this.props.video.title }</span> <span>({ this.props.video.runtime } min)</span>
        </div>;           

  }

  componentDidMount() {
    
  }
}

export default Video;
