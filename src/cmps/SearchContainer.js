import React, { useState } from 'react';

import ListIcon from '@material-ui/icons/List';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import CollectionList from './SearchContainer/CollectionList';
import SearchBar from './SearchContainer/SearchBar';

import queryService from '../services/queryService';
import soundService from '../services/soundService';
import storageService from '../services/storageService';

export default function SearchContainer({ navigation, setCurrTrack, setNavigation }) {

    const [query, setQuery] = useState('');
    const [collection, setCollection] = useState('');
    const [nextHref, setNextHref] = useState('');
    const defaultView = storageService.load('viewMode') === 'tiles' ? false : true;
    const [isListViewOn, setListView] = useState(defaultView);

    const onSetQuery = (inputQuery) => {
        setQuery(inputQuery);
    }

    const showSearch = async () => {
        queryService.saveSearchQueries(query);
        try {
            const result = await soundService.getTracks(query);
            const { collection, next_href } = result;
            setNavigation('search');
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

    const toggleViewList = (key) => {
        if (key === 'list' && isListViewOn) return;
        if (key === 'tiles' && !isListViewOn) return;
        setListView(!isListViewOn);
        storageService.store('viewMode', key);
    }

    return (
        <div className="flex column">
            <SearchBar onSetQuery={onSetQuery} showSearch={showSearch} />
            {collection && (navigation === 'search') &&
                <div className="flex column full">
                    <CollectionList
                        collection={collection}
                        isListViewOn={isListViewOn}
                        setCurrTrack={setCurrTrack}
                        setNavigation={setNavigation} />
                    <div className="flex">
                        <div className="btn next" onClick={goToNextPage}>
                            <div>next</div>
                        </div>
                        <div className="pointer view-icon-container" onClick={() => toggleViewList('list')}>
                            <ListIcon />
                        </div>
                        <div className="pointer view-icon-container" onClick={() => toggleViewList('tiles')}>
                            <ViewModuleIcon />
                        </div>
                    </div>
                </div>}
        </div>
    )
}