import React from 'react';

import storageService from '../services/storageService';

export default function RecentSearchesContainer({ setHistoryQuery }) {

    const lastQueries = storageService.load('lastQueries');

    const clickHandler = (query) => {
        setHistoryQuery(query);
    }

    return (
        <div className="flex full column recent-searches-container">
            <div className="uppercase searches-title">your last searches:</div>
            {lastQueries.map((query) => {
                return (
                    <div className="search-item" key={query.key}>
                        <div className="pointer" onClick={() => clickHandler(query.query)}>
                            {query.query}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}