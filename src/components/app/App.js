import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header/Header';
import Landing from '../../pages/Landing';
import Film from '../../pages/Film';
import Commercial from '../../pages/Commercial';
import Video from '.././video/Video';
import { VideoData } from '../../videoData/VideoData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [...VideoData]
    };
  }

  currentVideo(id) {
    this.setState({
      currentVideo: id
    });
    this.displayCurrentVideo();
  }

  render() {
    return (
      <Router >
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Landing videos={this.state.videos} />
            </React.Fragment>
          )} />
          <Route exact path="/film" render={props => (
            <React.Fragment>
              <Film videos={this.state.videos} />
            </React.Fragment>
          )} />
          <Route exact path="/commercial" render={props => (
            <React.Fragment>
              <Commercial videos={this.state.videos} />
            </React.Fragment>
          )} />
          <Route exact path="/video/:video" component={Video} />
        </div>
      </Router>
    );
  }

  componentDidMount() {
    //console.log(VideoData);
    //this.setState();
  }
}

export default App;
