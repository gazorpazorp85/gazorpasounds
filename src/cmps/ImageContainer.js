import React, { useState } from 'react';

import defaultImg from '../assets/icons/noartwork.png'

export default function ImageContainer({ track }) {

    const [isPlayerShown, setIsPlayerShown] = useState(false);
    const img = track.artwork_url ? track.artwork_url : defaultImg;
    const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}&amp;&auto_play=true`;

    const playTrack = () => {
        setIsPlayerShown(true);
    }

    return (
        <div>
            <div className="flex center pointer" onClick={playTrack}>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            {isPlayerShown && <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={url}>
            </iframe>}
        </div>
    )
}