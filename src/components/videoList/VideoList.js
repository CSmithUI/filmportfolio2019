import React from 'react';
import './VideoList.css';
import VideoElement from '../videoElement/VideoElement';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.tray = React.createRef();
    this.caretLeft = React.createRef();
    this.caretRight = React.createRef();
    this.setCaretVis = this.setCaretVis.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.currentVideo = this.currentVideo.bind(this);
    //this.offsetRight = this.offsetRight.bind(this);
  };

  sideScroll(element, direction, speed, distance, step) {

    // this function handles the smooth scroll motion
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction === 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }

    }, speed);
    this.delay(this.setCaretVis, 300);

  }

  delay(func, delay) {
    //console.log(func);
    setTimeout(func, delay);

  }

  setCaretVis() {

    //const el = this.refs.tray;
    const el = this.tray.current;
    //const parent = this.wrapper.current;
    const posRight = this.offsetRight();
    const posLeft = el.scrollLeft;
    const left = this.caretLeft.current;
    const right = this.caretRight.current;



    const parWidth = el.parentElement.offsetWidth;

    const width = el.scrollWidth;

    if (parWidth >= width) {

      if (!left.classList.contains("invis")) {
        left.classList.add("invis");
      } else if (left.classList.contains("invis")) {

      }
      if (!right.classList.contains("invis")) {
        right.classList.add("invis");
      }
    } else if (parWidth < width) {
      if (left.classList.contains("invis") && posLeft !== 0) {
        left.classList.remove("invis");
      } else if (!left.classList.contains("invis") && posLeft === 0) {
        left.classList.add("invis");
      }
      if (right.classList.contains("invis") && posRight !== 0) {
        right.classList.remove("invis");
      } else if (!right.classList.contains("invis") && posRight === 0) {
        right.classList.add("invis");
      }
    }


    if (posLeft > 0) {
      left.classList.remove("invis");
    } else {
      left.classList.add("invis");
    }
    if (posRight === 0) {
      right.classList.add("invis");
    } else {
      right.classList.remove("invis");
    }
  }

  offsetRight() {
    const el = this.tray.current;
    //const element = this.refs.tray;

    const parent = this.wrapper.current;
    const parWidth = parent.offsetWidth;
    //console.log("parWidth " + parWidth);

    const width = el.scrollWidth;
    //console.log("width " + width);

    const left = el.scrollLeft;
    //console.log("left " + left);

    let sub = width - parWidth;
    let calc = Math.abs(left - sub);
    //console.log("calc " + calc)
    return calc;
  };


  scrollLeft(e) {
    e.preventDefault();
    const el = this.tray.current;
    const width = window.innerWidth;
    const moveLeft = width - (width / 2);

    this.sideScroll(el, 'left', 5, moveLeft, 10);
  }

  scrollRight(e) {
    e.preventDefault();
    const el = this.tray.current;
    const width = window.innerWidth;
    const moveRight = width - (width / 2);

    this.sideScroll(el, 'right', 5, moveRight, 10);
  }

  currentVideo(id) { this.props.currentVideo(id) };

  // title(arr) {
  //   if (arr.length > 0) {
  //     const titles = arr.map(function (title) {
  //       return <span>{title}</span>
  //     });
  //   }
  //   else {
  //     return null

  //   }
  // }



  render() {

    return <div className="videoListComponent">
      <span className="videoListComponentCategory">{this.props.name}</span>
      <div className="videoScrollWrapper">

        <div className="videoTrackWrapper" ref={this.wrapper}>
          <div className="scrollLeft invis" onClick={this.scrollLeft} ref={this.caretLeft}>
            <svg className="caretLeft" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 20" version="1.1" x="0px" y="0px"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect fillRule="nonzero" x="0" y="0" width="16" height="16" /><polygon className="caretLeft" fill="#ffffff" fillRule="nonzero" points="5.73994639 8 11.3378623 13.1314229 10.6621377 13.8685771 4.26005361 8 10.6621377 2.13142293 11.3378623 2.86857707" /></g></svg>
          </div>
          <div className="scrollRight" onClick={this.scrollRight} ref={this.caretRight}>
            <svg className="caretRight" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 20" version="1.1" x="0px" y="0px"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect fillRule="nonzero" x="0" y="0" width="16" height="16" /><polygon fill="#ffffff" fillRule="nonzero" points="4.66213769 2.86857707 5.33786231 2.13142293 11.7399464 8 5.33786231 13.8685771 4.66213769 13.1314229 10.2600536 8" /></g></svg>
          </div>
          <div className="videoTrack" ref={this.tray}>
            {this.props.videos.map((video) => (
              <div key={video.id} className="eachVideo" onClick={this.handleClick} >
                <VideoElement key={video.id} url={video.urlLink} video={video} currentVideo={this.currentVideo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >

  }

  componentDidMount() {
    this.setCaretVis();
    window.addEventListener("resize", this.setCaretVis);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setCaretVis);
  }
}

export default VideoList;
