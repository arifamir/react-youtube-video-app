import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <div> Loading ...</div>;
    }
    const videoId = video.id.videoId;
    const url = "https://youtube.com/embed/" + videoId;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-resposnive ">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div className="title">{video.snippet.title}</div>
                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    );
};
export default VideoDetail;
