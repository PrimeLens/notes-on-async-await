


// await can be used with any object with a .then() method.


const Bluebird = require("bluebird");

async function main() {
    console.log("Working ...");
    await Bluebird.delay(2000);
    console.log("Done.");
}

main();