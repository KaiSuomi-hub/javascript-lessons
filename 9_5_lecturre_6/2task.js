// const delay = (time ,string) => new Promise((success, failure) => {
//     setTimeout(() => success(string), time);
// })

function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 1;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) {
        myDisplayer(value);
    },
    function (error) {
        myDisplayer(error);
    }
);

const delay = (time, str) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(str), time);
    });

delay(1000, "3")
    .then((val) => {
        console.log(val);
        return delay(1000, "2");
    })
    .then((val) => {
        console.log(val);
        return delay(1000, "1");
    })
    .then((val) => {
        console.log(val);
        return delay(1000, "Go!");
    })
    .then((val) => {
        console.log(val);
    })

    .catch((val) => {
        console.log(val);
    });
