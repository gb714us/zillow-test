const enc = encodeURIComponent;

function getQueryString (queryParams) { 
    return Object.keys(queryParams)
    .map(x => `${enc(x)}=${enc(queryParams[x])}`)
    .join('&')
}

module.exports = function(url, queryParams)
{
    return url + (queryParams ? '?' + getQueryString(queryParams) : '');
}