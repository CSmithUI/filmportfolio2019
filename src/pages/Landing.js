import React from 'react';
import './Landing.css';



class Landing extends React.Component {
  constructor() {
    super();
  }

  render() {

    let hero = this.props.videos.find(video => { return video.id === 1 });

    console.log(hero);


    return <div className="bg">
      <div className="nameTitle">
        <span>CHRISTOPHER</span><br />
        <span>CARSON</span><br />
        <span>SMITH</span><br />
      </div>
      <div className="hero">
        <iframe
          title={hero.id}
          className="heroFrame"
          src={hero.urlLink}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope"
          allowFullScreen>
        </iframe>
        <br />
        <span>{hero.title}</span> <span>({hero.runtime} min)</span>
      </div>
    </div>;
  }


  componentDidMount() {

  }
}



export default Landing;
