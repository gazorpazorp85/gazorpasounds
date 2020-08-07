import React from 'react';

import defaultImg from '../../assets/icons/noartwork.png'

export default function CollectionPreview({ isListViewOn, setCurrTrack, setNavigation, track }) {
    const regex = /large/gi;
    const img = track.artwork_url ? track.artwork_url.replace(regex, 't200x200') : defaultImg;
    const title = `${track.user.username} - ${track.title}`;
    const formatedTitle = (title.length > 70) ? title.substring(0, 65) + '...' : title;

    const clickHandler = (track) => {
        setCurrTrack(track);
        setNavigation('image');
    }

    return (
        <div className="flex pointer" onClick={() => clickHandler(track)}>
            {isListViewOn ?
                <div className="flex align-center title-container">
                    <div>
                        {formatedTitle}
                    </div>
                </div> :
                <div className="flex img-container">
                    <div className="flex align-center preview-screen">
                        <div>{formatedTitle}</div>
                    </div>
                    <img src={img} alt={title} height="200px" width="200px" />
                </div>
            }
        </div>
    )
}