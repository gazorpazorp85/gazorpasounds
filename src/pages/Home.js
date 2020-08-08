import React, { useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import ImageContainer from '../cmps/ImageContainer';
import RecentSearchesContainer from '../cmps/RecentSearchesContainer';
import SearchBar from '../cmps/SearchBar';
import SearchContainer from '../cmps/SearchContainer';

import queryService from '../services/queryService';
import soundService from '../services/soundService';
import storageService from '../services/storageService';

import mainLogo from '../assets/img/logo-white.png'

export default function Home() {

    const [navigation, setNavigation] = useState('home');
    const [currTrack, setCurrTrack] = useState('');
    const [historyQuery, setHistoryQuery] = useState('');
    const [inTransition, setInTransition] = useState(false);
    const [collection, setCollection] = useState('');
    const [nextHref, setNextHref] = useState('');
    const [query, setQuery] = useState('');

    const lastQueries = storageService.load('lastQueries');

    const showSearch = async () => {
        queryService.saveSearchQueries(query);
        _queryHandle(query);
    }

    const showHistoryQuery = () => {
        _queryHandle(historyQuery);
    }

    const _queryHandle = async (query) => {
        setNavigation('search');
        setInTransition(!inTransition);
        try {
            const result = await soundService.getTracks(query);
            const { collection, next_href } = result;
            if (collection.length === 0) {
                setNavigation('not-found');
                setInTransition(!inTransition);
                return;
            }
            setCollection(collection);
            setNextHref(next_href);
        } catch (err) {
            console.log(err);
        }
    }

    const goToHistory = () => {
        setNavigation('history');
        setInTransition(!inTransition);
    }

    useEffect(() => {
        if (!historyQuery) return;
        showHistoryQuery();
    }, [historyQuery])

    return (
        <div className="flex full column main-container home">
            <div className="flex search-bar-container">
                <SearchBar setQuery={setQuery} showSearch={showSearch} />
                {lastQueries &&
                    <div
                        className="flex center align-center pointer capitalize search-history"
                        onClick={goToHistory}>
                        view search history
                    </div>}
            </div>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={inTransition}
                    timeout={700}
                    classNames="cmp-animation"
                    unmountOnExit
                >
                    <>
                        {(navigation === 'search') &&
                            <SearchContainer
                                collection={collection}
                                inTransition={inTransition}
                                nextHref={nextHref}
                                setCollection={setCollection}
                                setCurrTrack={setCurrTrack}
                                setHistoryQuery={setHistoryQuery}
                                setNextHref={setNextHref}
                                setInTransition={setInTransition}
                                setNavigation={setNavigation} />}
                        {(navigation === 'not-found') &&
                            <div className="capitalize no-found-items">
                                no items found. please try to search for something else.
                            </div>}
                        {(navigation === 'home') &&
                            <div className="flex full center align-center logo-container">
                                <img src={mainLogo} alt="gazorpasounds" />
                            </div>}
                        {(navigation === 'image') && <ImageContainer track={currTrack} />}
                        {(navigation === 'history') && <RecentSearchesContainer setHistoryQuery={setHistoryQuery} showHistoryQuery={showHistoryQuery} />}
                    </>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}