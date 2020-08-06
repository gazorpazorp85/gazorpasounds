import React from 'react';

import CollectionPreview from './CollectionPreview';

export default function CollectionList({ collection, isListViewOn }) {
    console.log(collection);
    console.log(isListViewOn);
    const flexDirection = isListViewOn ? 'list' : 'tiles'
    return (
        <div className={`flex collection-list-container ${flexDirection}`}>
            {collection.map(track => <CollectionPreview track={track} key={track.id} isListViewOn={isListViewOn}/>)}
        </div>
    )
}