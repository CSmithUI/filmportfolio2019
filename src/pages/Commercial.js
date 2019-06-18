import React from 'react';
import VideoList from '../components/videoList/VideoList'

class Commercial extends React.Component {
  constructor() {
    super();
  }

  render() {

    const commercials = this.props.videos.filter(video => video.category == 'commercial')

    return <div>
      <p>Commercial and Branded</p>
      <VideoList videos={commercials} />
    </div>;
  }


  componentDidMount() {

  }
}

export default Commercial;
