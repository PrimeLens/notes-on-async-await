
// a simple generator that yields the values 1,2 and 3
// and a "for of" loop to iterate over those values

function* someGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

function main() {
    for (const value of someGenerator()) {
        console.log(value);
    }
}

main();