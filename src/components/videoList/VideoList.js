import React from 'react';
import Video from '../video/Video'

class VideoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return this.props.videos.map((video) => (
      <Video key={video.id} video={video} />
    ));
  }

  componentDidMount() {
  }
}

export default VideoList;
