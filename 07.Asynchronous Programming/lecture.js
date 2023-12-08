console.log('start');

setTimeout(() => {
    console.log('middle1')
}, 0);

setTimeout(() => {
    console.log('middle2')
}, 2000); // this function starts working 2sec after the last one has been completed

console.log('end');


//Callbacks

function someFunc(callback){
    callback(1, 2);
}

function calc(a, b){
    console.log(a+b);
}

someFunc(calc);

// Promises
// function executor(resolve, reject){
//...
// }

const promise = new Promise(function(resolve, reject){
    if (Math.random() < 0.5) {
        return reject('Marrige is cancelled!');
    }
    setTimeout(() => {
        resolve('Just married :)');
    }, 2000);
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => { //executed no matter of the result - rejected or resolved(whenever the promise is settled)
        console.log(promise);
    }) 

// Promise methods

const alwaysRejectedPromise = Promise.reject('This is a no!');
alwaysRejectedPromise
    .catch((err) => {
        console.log(err);
    })

const alwaysResolvingPromise = Promise.resolve('This is no');

alwaysResolvingPromise.then((result) => {
    console.log(result);
})


const promisesAll = Promise.all([ // does them in parallel
    alwaysRejectedPromise,
    alwaysResolvingPromise,
    10,
    'Mila',
])

promisesAll
    .then((values) => {
        console.log(values);
    })
    .catch(err => console.log(err));



