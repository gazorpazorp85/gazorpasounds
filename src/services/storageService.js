export default {
    store,
    load
}

function store(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function load(key) {
    let str = localStorage[key] || 'null';
    return JSON.parse(str);
}