import React from 'react';
import VideoList from '../components/videoList/VideoList'

class Film extends React.Component {
  constructor() {
    super();
  }

  render() {

    const films = this.props.videos.filter(video => video.category == 'film')

    return <div>
      <p>FIlms</p>
      <VideoList videos={films} />
    </div>;
  }

  componentDidMount() {

  }
}

export default Film;
