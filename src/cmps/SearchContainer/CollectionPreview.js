import React from 'react';

import defaultImg from '../../assets/icons/noartwork.png'

export default function CollectionPreview({ isListViewOn, track }) {

    const img = track.artwork_url ? track.artwork_url : defaultImg;

    return (
        <div className="flex pointer">
            {isListViewOn ?
                <div>{track.user.username} - {track.title}</div> :
                <div>
                    <img src={img} alt="" height="100px" width="100px" />
                </div>
            }
        </div>
    )
}