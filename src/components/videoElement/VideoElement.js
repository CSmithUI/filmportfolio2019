import React from 'react';
import { Link } from 'react-router-dom';
import './VideoElement.css';
import play from './imgs/noun_play_1.svg';


class VideoElement extends React.Component {

    roles = () => {
        let roles = [];
        if (this.props.video.producedBy) {
            roles.push(' Produced');
        }
        if (this.props.video.directedBy) {
            roles.push(' Directed');
        }
        if (this.props.video.editedBy) {
            roles.push(' Edited ');
        }
        return roles.toString();
    }


    render() {


        return <div className="videoElement">
            <div>
                <img className="playIconDiv" src={play} alt="Play icon" />
            </div>
            <Link to={{
                pathname: '/video/' + this.props.video.id,
                state: {
                    video: this.props.video
                }
            }}>
                <img src={require(`../../videoImages/${this.props.video.coverImg}`)} className="videoCover" alt="Video Cover" />
            </Link>

            <div className="videoInfo">
                <span>{this.props.video.title}</span> <span className="runtime">{this.props.video.runtime}m</span>
                <br />
                <span className="roles" >{this.roles()}</span>
            </div>
        </div>;
    }

    componentDidMount() {
        //this.setState({ someKey: 'otherValue' });
    }
}

export default VideoElement;
