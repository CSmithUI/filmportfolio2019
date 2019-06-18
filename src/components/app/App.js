import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header/Header';
import Landing from '../../pages/Landing';
import Film from '../../pages/Film';
import Commercial from '../../pages/Commercial';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          id: 1,
          title: '3OH!3: BASMF',
          type: 'Music Video',
          category: 'commercial',
          yearCreated: '2016',
          runtime: '3',
          urlLink: 'https://www.youtube.com/embed/sBws8MSXN7A',
          coverImg: 'basmf.png'
        },
        {
          id: 8,
          title: '3OH!3: BASMF',
          type: 'Music Video',
          category: 'film',
          yearCreated: '2016',
          runtime: '3',
          urlLink: 'https://player.vimeo.com/video/337273052'
        },
        {
          id: 3,
          title: '3OH!3: BASMF',
          type: 'Music Video',
          category: 'film',
          yearCreated: '2016',
          runtime: '3',
          urlLink: 'https://www.youtube.com/embed/sBws8MSXN7A'
        },
        {
          id: 4,
          title: '3OH!3: BASMF',
          type: 'Music Video',
          category: 'commercial',
          yearCreated: '2016',
          runtime: '3',
          urlLink: 'https://www.youtube.com/embed/sBws8MSXN7A'
        }
      ]
    }
  }



  render() {
    return (
      <Router>
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
        </div>
      </Router>
    );
  }

  componentDidMount() {
    //this.setState();
  }
}

export default App;
