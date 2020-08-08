import React from 'react';

import defaultImg from '../../assets/icons/noartwork.png'

export default function CollectionPreview({ inTransition, isListViewOn, setCurrTrack, setInTransition, setNavigation, track }) {
    const regex = /large/gi;
    const img = track.artwork_url ? track.artwork_url.replace(regex, 't200x200') : defaultImg;
    const title = `${track.user.username} - ${track.title}`;
    const formatedTitle = (title.length > 70) ? title.substring(0, 65) + '...' : title;

    const clickHandler = (track) => {
        setCurrTrack(track);
        setInTransition(!inTransition)
        setNavigation('image');
    }

    return (
        isListViewOn ?
            <div className="flex align-center pointer title-container" onClick={() => clickHandler(track)}>
                <div>
                    {formatedTitle}
                </div>
            </div> :
            <div className="flex pointer img-container" onClick={() => clickHandler(track)}>
                {window.innerWidth > 460 && <div className="flex align-center preview-screen">
                    <div className="preview-screen-title">{formatedTitle}</div>
                </div>}
                <img src={img} alt={title} />
            </div>

    )
}