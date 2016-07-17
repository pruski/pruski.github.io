export const fetchJson = (url, config) => {
    return fetch(url, config).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        else {
            return Promise.reject();
        }
    })
};