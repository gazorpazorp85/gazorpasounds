import React, { useState } from 'react';

import ImageContainer from '../cmps/ImageContainer';
import SearchContainer from '../cmps/SearchContainer';
import mainLogo from '../assets/img/logo-white.png'

export default function Home() {

    const [navigation, setNavigation] = useState('home');
    const [currTrack, setCurrTrack] = useState('');

    return (
        <div className="flex column full main-container home">
            <SearchContainer
                navigation={navigation}
                setCurrTrack={setCurrTrack}
                setNavigation={setNavigation} />
            {(navigation === 'home') ?
                <div className="flex full center align-center">
                    <img src={mainLogo} alt="gazorpasounds" />
                </div> :
                (navigation === 'image') ?
                    <ImageContainer track={currTrack} /> : ''}
        </div>

    )
}