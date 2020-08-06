import React from 'react';

import defaultImg from '../../assets/icons/noartwork.png'

export default function CollectionPreview({ track }) {

    const img = track.artwork_url ? track.artwork_url : defaultImg;

    return (
        <div className="flex pointer">
            <div>
                <img src={img} alt="" height="100px" width="100px" />
            </div>
            <div>{track.user.username} - {track.title}</div>
        </div>
    )
}