import storageService from './storageService';

export default {
    saveSearchQueries
}

function saveSearchQueries(query) {
    let lastQueries = storageService.load('lastQueries');
    if (!lastQueries) {
        lastQueries = [query];
    } else {
        lastQueries.unshift(query);
    }
    storageService.store('lastQueries', lastQueries);
}