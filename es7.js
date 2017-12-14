'use strict';

/*
function getUserInfo() {
    return asyncMethodPromise('Getting user info at ' + new Date());
}

function validateUserInfo() {
    return asyncMethodPromise('Validating user info at ' + new Date());
}

function performUserAction() {
    return asyncMethodPromise('Perform action on user at ' + new Date());
}

asyncMethodPromise('Establishing DB Connection at ' + new Date())
    .then(getUserInfo)
    .then(validateUserInfo)
    .then(performUserAction);

*/

let main = (() => {
    var _ref = _asyncToGenerator(function* () {
        yield asyncMethodPromise('Establishing DB Connection');
        yield asyncMethodPromise('Getting user info');
        yield asyncMethodPromise('Validating user info');
        yield asyncMethodPromise('Perform action on user');
    });

    return function main() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

main();
