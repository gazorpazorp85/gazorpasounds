import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
    return (
        <div className="flex column center align-center loading-page">
            <h2 className="uppercase">we're fetching your data :)</h2>
            <CircularProgress />
        </div>
    )
}