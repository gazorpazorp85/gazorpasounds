import React from 'react';

import CollectionPreview from './CollectionPreview';

export default function CollectionList({ collection, inTransition, isListViewOn, setCurrTrack,setInTransition, setNavigation }) {
    const flexDirection = isListViewOn ? 'list' : 'tiles'
    return (
        <div className={`flex wrap collection-list-container ${flexDirection}`}>
            {collection.map(track => {
                return <CollectionPreview
                    isListViewOn={isListViewOn}
                    inTransition={inTransition}
                    key={track.id}
                    setCurrTrack={setCurrTrack}
                    setInTransition={setInTransition}
                    setNavigation={setNavigation}
                    track={track} />
            })}
        </div>
    )
}