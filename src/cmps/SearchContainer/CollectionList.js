import React from 'react';

import CollectionPreview from './CollectionPreview';

export default function CollectionList({ collection, isListViewOn }) {
    console.log(collection);
    console.log(isListViewOn);
    const flexDirection = isListViewOn ? 'column' : ''
    return (
        <div className={`flex ${flexDirection}`}>
            {collection.map(track => <CollectionPreview track={track} key={track.id} isListViewOn={isListViewOn}/>)}
        </div>
    )
}