import React from 'react';
import './Commercial.css';
import VideoList from '../components/videoList/VideoList'

class Commercial extends React.Component {

  render() {

    const fashionFilms = this.props.videos.filter(video => video.type === 'Fashion Film');
    const brandedContent = this.props.videos.filter(video => video.type === 'Branded Content');
    const sizzleReels = this.props.videos.filter(video => video.type === 'Sizzle Reel');
    const musicVideos = this.props.videos.filter(video => video.type === 'Music Video');

    const frameTitle = "iframe for video " + this.currentVideo;

    return <div className="commercialPageWrapper">
      <div className="videoListWrapper fashionFilmWrapper">
        <div className="brandedContent"><VideoList videos={fashionFilms} name="Fashion Films" currentVideo={this.currentVideo} /></div>
      </div>
      <div className="videoListWrapper brandedContentWrapper">
        <div className="brandedContent"><VideoList videos={brandedContent} name="Branded Content" currentVideo={this.currentVideo} /></div>
      </div>
      <div className="videoListWrapper sizzleReelsWrapper">
        <div className="sizzleReels"><VideoList videos={sizzleReels} name="Sizzle Reels" currentVideo={this.currentVideo} /></div>
      </div>
      <div className="videoListWrapper musicVideosWrapper">
        <div className="musicVideos"><VideoList videos={musicVideos} name="Music Videos" currentVideo={this.currentVideo} /></div>
      </div>
    </div >;
  }


  componentDidMount() {

  }
}

export default Commercial;
