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
    // renamed the variables because they store the promise not the results
    const userPromise = fetchFromGithub(`/users/${handle}`);
    const reposPromise = fetchFromGithub(`/users/${handle}/repos`);
    // now we apply the await, but instead of the next two lines ...
    // const user = await userPromise;
    // const repos = await reposPromise;
    // Promise.all() actis similarly to the old $.when from jQuery
    const results = await Promise.all( [userPromise, reposPromise] );
    const user = results[0];
    const repos = results[1];
    console.log(user.name);
    console.log(`${repos.length} repos`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}




showUserAndRepos('mariusschulz');
