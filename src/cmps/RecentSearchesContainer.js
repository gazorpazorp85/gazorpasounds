import React from 'react';

import storageService from '../services/storageService';

export default function RecentSearchesContainer({ setHistoryQuery }) {

    const lastQueries = storageService.load('lastQueries');

    return (
        <div className="flex full column">
            {lastQueries.map((query) => {
                return (
                    <div key={query.key}>
                        <div className="pointer" onClick={() => setHistoryQuery(query.query)}>
                            {query.query}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}