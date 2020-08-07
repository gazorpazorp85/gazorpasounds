import React, { useState } from 'react';

import ImageContainer from '../cmps/ImageContainer';
import RecentSearchesContainer from '../cmps/RecentSearchesContainer';
import SearchContainer from '../cmps/SearchContainer';
import mainLogo from '../assets/img/logo-white.png'

export default function Home() {

    const [navigation, setNavigation] = useState('home');
    const [currTrack, setCurrTrack] = useState('');
    const [historyQuery, setHistoryQuery] = useState('');

    return (
        <div className="flex column full main-container home">
            <SearchContainer
                historyQuery={historyQuery}
                navigation={navigation}
                setCurrTrack={setCurrTrack}
                setHistoryQuery={setHistoryQuery}
                setNavigation={setNavigation} />
            {(navigation === 'home') &&
                <div className="flex full center align-center">
                    <img src={mainLogo} alt="gazorpasounds" />
                </div>}
            {(navigation === 'image') &&
                <ImageContainer track={currTrack} />}
            {(navigation === 'history') &&
                <RecentSearchesContainer setHistoryQuery={setHistoryQuery} />}
        </div>
    )
}
            // {(navigation === 'home') ?
            //     <div className="flex full center align-center">
            //         <img src={mainLogo} alt="gazorpasounds" />
            //     </div> :
            //     (navigation === 'image') ?
            //         <ImageContainer track={currTrack} /> :
            //         (navigation === 'history') ?
            //             <RecentSearchesContainer setHistoryQuery={setHistoryQuery} /> : ''}