//This wraps our APIs in a function that will catch errors and pass them onto the Express error handling, needed to remove the scary node errors in async functions.
module.exports = function wrapApi(apiObj) {
    for (const [key, value] of Object.entries(apiObj)) {
        apiObj[key] = wrapAsync(value);
    }
    return apiObj;
};

function wrapAsync(fn) {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}