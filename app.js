'use strict';

function asyncMethodCallback(message, cb) {
    setTimeout(function () {
        console.log(message);
        cb();
    }, 500);
}

// callback hell
/*
asyncMethodCallback('Establishing DB Connection', function () {
    asyncMethodCallback('Getting user info', function () {
        asyncMethodCallback('Validating user info', function () {
            asyncMethodCallback('Perform action on user', function () {
                console.log('End of transaction');
            });
        });
    });
});
*/

function asyncMethodPromise(message) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log(message);
            fulfill();
        }, 500);
    });
}

function getUserInfo() {
    return asyncMethodPromise('Getting user info');
}

function validateUserInfo() {
    return asyncMethodPromise('Validating user info');
}

function performUserAction() {
    return asyncMethodPromise('Perform action on user');
}

asyncMethodPromise('Establishing DB Connection')
    .then(getUserInfo)
    .then(validateUserInfo)
    .then(performUserAction);



/*
async function main() {
    await asyncMethodPromise('Establishing DB Connection');
    await asyncMethodPromise('Getting user info');
    await asyncMethodPromise('Validating user info');
    await asyncMethodPromise('Perform action on user');
}

main();

*/