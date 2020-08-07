import React, { useState } from 'react';

export default function SearchBar({ onSetQuery, showSearch }) {

    const [searchQuery, setSearchQuery] = useState('');

    const inputChange = (ev) => {
        const { value } = ev.target;
        setSearchQuery(value);
        onSetQuery(value);
    }

    const checkKey = (ev) => {
        if (ev.key === 'Enter') showSearch();
    }

    return (
        <div className="flex column">
            <div className="flex search-input-container">
                <input id="search-bar" type="text" placeholder="Search" value={searchQuery}
                    onChange={inputChange} onKeyPress={checkKey} />
                <span className="search-bar-icon"></span>
                <div className="btn uppercase pointer" onClick={showSearch}>
                    <div>set</div>
                </div>
            </div>
        </div>
    )
}