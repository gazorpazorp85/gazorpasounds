import React, { useState } from 'react';

import ListIcon from '@material-ui/icons/List';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import Loading from './Loading';
import CollectionList from './SearchContainer/CollectionList';

import soundService from '../services/soundService';
import storageService from '../services/storageService';

export default function SearchContainer({ collection, inTransition, nextHref, setCollection, setCurrTrack, setNextHref, setInTransition, setNavigation }) {

    const defaultView = storageService.load('viewMode') === 'tiles' ? false : true;
    const [isListViewOn, setListView] = useState(defaultView);

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
        collection ? <div className="flex column search-container">
            <CollectionList
                collection={collection}
                inTransition={inTransition}
                isListViewOn={isListViewOn}
                setCurrTrack={setCurrTrack}
                setInTransition={setInTransition}
                setNavigation={setNavigation} />
            <div className="flex">
                {nextHref && <div className="btn next" onClick={goToNextPage}>
                    <div>next</div>
                </div>}
                <div className={`pointer view-icon-container ${isListViewOn ? 'selected' : ''}`} onClick={() => toggleViewList('list')}>
                    <ListIcon />
                </div>
                <div className={`pointer view-icon-container ${!isListViewOn ? 'selected' : ''}`} onClick={() => toggleViewList('tiles')}>
                    <ViewModuleIcon />
                </div>
            </div>
        </div> : <Loading />
    )
}