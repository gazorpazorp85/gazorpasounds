import React, { useState } from 'react';

import CollectionList from './SearchContainer/CollectionList';
import SearchBar from './SearchContainer/SearchBar';

import queryService from '../services/queryService';
import soundService from '../services/soundService';

export default function SearchContainer() {

    const [query, setQuery] = useState('');
    const [collection, setCollection] = useState('');
    const [nextHref, setNextHref] = useState('');

    const onSetQuery = (inputQuery) => {
        setQuery(inputQuery);
    }

    const showSearch = async () => {
        queryService.saveSearchQueries(query);
        try {
            const result = await soundService.getTracks(query);
            const { collection, next_href } = result;
            setCollection(collection);
            setNextHref(next_href);
        } catch (err) {
            console.log(err);
        }
    }

    const goToNextPage = async () => {
        try {
            const result = await soundService.getNextPageTracks(nextHref);
            const { collection, next_href } = result;
            setCollection(collection);
            setNextHref(next_href);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex column full">
            <SearchBar onSetQuery={onSetQuery} showSearch={showSearch} />
            {collection && <CollectionList collection={collection} />}
            <div className="btn next" onClick={goToNextPage}>
                <div>next</div>
            </div>
        </div>

    )
}