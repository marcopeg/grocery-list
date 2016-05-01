

const ERR_MSG_INIT = 'Storage service was not initialized!';

var isInitialized;

export function init() {
    return new Promise((resolve) => {
        isInitialized = true;
        resolve();
    });
}

export function clear() {
    return new Promise((resolve, reject) => {
        if (!isInitialized) {
            return reject(ERR_MSG_INIT);
        }

        try {
            localStorage.clear();
            resolve();
        } catch(e) {
            reject(e);
        }
    });
}

export function isReady() {
    return new Promise((resolve, reject) => {
        if (isInitialized) {
            resolve();
        } else {
            return reject(ERR_MSG_INIT);
        }
    });
}

export function setItem(key, value) {
    return new Promise((resolve, reject) => {
        if (!isInitialized) {
            return reject(ERR_MSG_INIT);
        }

        try {
            localStorage.setItem(key, JSON.stringify({ _: value }));
            resolve(value);
        } catch(e) {
            reject(e);
        }
    });
}

export function getItem(key, defaultValue = null) {
    return new Promise((resolve, reject) => {
        if (!isInitialized) {
            return reject(ERR_MSG_INIT);
        }

        var currentValue = localStorage.getItem(key);
        if (currentValue !== null) {
            try {
                currentValue = JSON.parse(currentValue)._;
            } catch (e) {
                return reject(e);
            }
            return resolve(currentValue);
        }
        resolve(defaultValue);
    });
}

export function removeItem(key) {
    return new Promise((resolve, reject) => {
        if (!isInitialized) {
            return reject(ERR_MSG_INIT);
        }

        try {
            localStorage.removeItem(key);
            resolve(key);
        } catch(e) {
            reject(e);
        }
    });
}
