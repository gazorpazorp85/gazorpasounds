import React from 'react';

import CollectionPreview from './CollectionPreview';

export default function CollectionList({ collection }) {
    console.log(collection);
    return (
        collection.map(track => <CollectionPreview track={track} key={track.id} />)
    )
}