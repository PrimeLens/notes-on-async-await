// https://github.com/mariusschulz
// https://egghead.io/lessons/javascript-write-an-asynchronous-function-with-async-await

const fetch = require('node-fetch');

async function fetchFromGithub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  console.log('=> ',url);
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200)
    throw Error(body.message);
  return body;
}


async function showUserAndRepos(handle){
  try {
    const user = await fetchFromGithub(`/users/${handle}`);
    // the await above causes a pause before the next fetch is called
    const repos = await fetchFromGithub(`/users/${handle}/repos`);
    console.log(user.name);
    console.log(`${repos.length} repos`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}




showUserAndRepos('mariusschulz');
