import storageService from './storageService';

export default {
    saveSearchQueries
}

function saveSearchQueries(query) {
    let lastQueries = storageService.load('lastQueries');
    const queryObj = { query, key: _getRandomKey() }
    if (!lastQueries) {
        lastQueries = [queryObj];
    } else {
        lastQueries.unshift(queryObj);
    }
    if (lastQueries.length > 5) {
        lastQueries.splice(lastQueries.length - 1, 1);
    }
    storageService.store('lastQueries', lastQueries);
}

function _getRandomKey() {
    const letters = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    const max = letters.length;
    let key = '';
    for (let i = 0; i < 15; i++) {
        let idx = Math.floor(Math.random() * max);
        key += letters[idx];
    }
    return key;
}