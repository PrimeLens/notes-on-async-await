// https://github.com/mariusschulz
// https://egghead.io/lessons/javascript-write-an-asynchronous-function-with-async-await

const fetch = require('node-fetch');

async function fetchGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();
  // console.log('response.status ', response.status);
  if (response.status !== 200)
    throw Error(body.message);
  return body;
}


async function showGithubUser(handle){
  try {
    const user = await fetchGithubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}




showGithubUser('xxxxxxxxx1234567');
// showGithubUser('mariusschulz');
