import React from 'react';
import './Landing.css';

import VideoElement from '../components/videoElement/VideoElement';



class Landing extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    let hero = this.props.videos.find(video => { return video.id === 1 });

    return <div className="bg">
      <div className="nameTitle">
        <span className="name">CHRISTOPHER</span><br />
        <span className="name">CARSON</span><br />
        <span className="name">SMITH</span><br />
        <span className="subTitle">Film and Video Editor</span><br />
      </div>
      <div className="heroElement">
        <VideoElement video={hero} />
      </div>

    </div>;
  }


  componentDidMount() {

  }
}



export default Landing;
