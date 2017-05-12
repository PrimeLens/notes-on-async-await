
// there is a for-await-of loop

// this is a patch
// see https://github.com/mariusschulz/egghead-async-await/tree/master/lesson-8
Symbol.asyncIterator = Symbol.asyncIterator || Symbol("asyncIterator");

// the delay is defined here
const delay = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});

// we make the simple generator async
// and add in delays which we will await
async function* someGenerator() {
    await delay(1000);
    yield 1;
    await delay(1000);
    yield 2;
    await delay(1000);
    yield 3;
}

async function main() {
    for await (const value of someGenerator()) {
        console.log(value);
    }
}
// the above would be the same as 
// async function main(){
//     const generator = someGenerator();
//     white (true) {
//         const {value, done} = await generator.next();
//         if (done) {
//             break;
//         }
//         console.log(value);
//     }
// }

main();