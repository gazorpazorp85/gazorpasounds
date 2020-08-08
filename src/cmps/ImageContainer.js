import React, { useState } from 'react';
import defaultImg from '../assets/icons/noartwork.png'


export default function ImageContainer({ track }) {
    const [isPlayerShown, setIsPlayerShown] = useState(false);
    const regex = /large/gi;
    const img = track.artwork_url ? track.artwork_url.replace(regex, 't500x500') : defaultImg;
    const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}&amp;&auto_play=true`;

    return (
        <div>
            <div className="flex center image-container">
                <img className="pointer" src={img} alt="" onClick={() => setIsPlayerShown(true)} />
            </div>
            {isPlayerShown && <iframe title="sc-player" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={url}>
            </iframe>}
        </div>
    )
}