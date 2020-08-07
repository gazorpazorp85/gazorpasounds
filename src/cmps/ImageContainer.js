import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/soundcloud';
// import SC from 'soundcloud';
import defaultImg from '../assets/icons/noartwork.png'

// import PlayIcon from '@material-ui/icons/PlayCircleOutline';
// import PauseIcon from '@material-ui/icons/PauseCircleOutline';

export default function ImageContainer({ track }) {
    const inputEl = useRef(null);
    const [isPlayerShown, setIsPlayerShown] = useState(false);
    const regex = /large/gi;
    const img = track.artwork_url ? track.artwork_url.replace(regex, 't500x500') : defaultImg;
    const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}&amp;&auto_play=true`;
    // const url = `https%3A//api.soundcloud.com/tracks/${track.id}&amp;&auto_play=true`;

    const playTrack = () => {
        setIsPlayerShown(true);
        // if (isPlayerShown) {
        //     console.log(inputEl)
        //     // inputEl.current.player.handlePlayPause();
        //     inputEl.current.player.handlePause();
        // }
    }

    return (
        <div>
            <div className="flex center pointer image-container" onClick={playTrack}>
                <div>
                    {/* <div className="flex center align-center image-screen">
                        <div>{isPlayerShown ? <PlayIcon /> : <PauseIcon />}</div>
                    </div> */}
                    <img src={img} alt="" />
                </div>
            </div>
            {isPlayerShown && <iframe ref={inputEl} width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={url}>
            </iframe>}
            {/* {isPlayerShown && <ReactPlayer ref={inputEl} url={url}/>} */}

        </div>
    )
}