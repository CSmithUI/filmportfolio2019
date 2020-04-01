import React from 'react';
import './Film.css';
import VideoList from '../components/videoList/VideoList'

class Film extends React.Component {



  render() {

    const shortFilms = this.props.videos.filter(video => video.category === 'film').filter(video => video.runtime < 40);
    const featureFilms = this.props.videos.filter(video => video.category === 'film').filter(video => video.runtime >= 40);

    return <div className="filmPageWrapper">
      <div className="shortFilmWrapper">
        <div className="shortFilm"><VideoList videos={shortFilms} name="Short Films" /></div>
      </div>
      <div className="featureFilmWrapper">
        <div className="featureFilm"><VideoList videos={featureFilms} name="Feature Films" /></div>
      </div>
    </div>;



  }

  componentDidMount() {

  }
}

export default Film;
