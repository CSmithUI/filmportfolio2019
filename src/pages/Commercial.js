import React from 'react';
import './Commercial.css';
import VideoList from '../components/videoList/VideoList'

class Commercial extends React.Component {

  render() {

    const fashionFilms = this.props.videos.filter(video => video.type === 'Fashion Film');
    const brandedContent = this.props.videos.filter(video => video.type === 'Branded Content');
    const sizzleReels = this.props.videos.filter(video => video.type === 'Sizzle Reel');
    const trailers = this.props.videos.filter(video => video.type === 'Trailer');
    const promos = this.props.videos.filter(video => video.type === 'Promo');
    const musicVideos = this.props.videos.filter(video => video.type === 'Music Video');

    const fashionAndMusicVideos = fashionFilms.concat(musicVideos);
    const promosAndSizzles = promos.concat(trailers, sizzleReels);
    const sortedPromosAndSizzles = promosAndSizzles.sort((a, b) => (a.id > b.id) ? 1 : -1);
    console.log(sortedPromosAndSizzles);



    return <div className="commercialPageWrapper">
      <div className="videoListWrapper sizzleReelsWrapper">
        <div className="sizzleReels"><VideoList videos={promosAndSizzles} name="Promos - Trailers - Sizzle Reels" currentVideo={this.currentVideo} /></div>
      </div>
      <div className="videoListWrapper fashionFilmWrapper">
        <div className="fashionFilm"><VideoList videos={fashionAndMusicVideos} name="Fashion Films - Music Videos" currentVideo={this.currentVideo} /></div>
      </div>
      <div className="videoListWrapper brandedContentWrapper">
        <div className="brandedContent"><VideoList videos={brandedContent} name="Branded Content" currentVideo={this.currentVideo} /></div>
      </div>
    </div >;
  }


  componentDidMount() {

  }
}

export default Commercial;
