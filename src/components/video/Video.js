import React from 'react';
import './Video.css'

class Video extends React.Component {

    constructor() {
        super();
        this.frame = React.createRef();
        this.videoPlayerFadeIn = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.transitionIn = this.transitionIn.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.goBack();
    }

    transitionIn() {
        const node = this.frame.current;
        const node2 = this.videoPlayerFadeIn.current;
        setTimeout(() => { node2.classList.add("wrapperFade") }, 50)
        setTimeout(() => { node.classList.add("wrapperFade") }, 700)
    }

    render() {

        const currentVid = this.props.location.state.video;

        const urlLink = currentVid.urlLink;
        //console.log(video);

        //console.log(vid);

        const frameTitle = "iframe for video " + currentVid.id;
        if (currentVid.widescreen) {
            console.log("widescreen");
        }


        return <div className="videoPageWrapper" >
            <div className="videoPlayerFadeIn" ref={this.videoPlayerFadeIn}>
                <div className="backArrowWrapper">
                    <div className="backArrow" onClick={this.handleClick}>
                        <span className="arrowIcon">X</span>
                    </div>
                </div>

                <div className="videoPlayerWrapper" >
                    <iframe className="videoPlayer" title={frameTitle} src={urlLink} ref={this.frame} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
            </div>

        </div >
            ;
    }

    componentDidMount() {
        this.transitionIn();
    }

}

export default Video;
