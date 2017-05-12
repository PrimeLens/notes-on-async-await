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
    // following commented out lines in one line using destructuring
    // const userPromise = fetchFromGithub(`/users/${handle}`);
    // const reposPromise = fetchFromGithub(`/users/${handle}/repos`);
    // const results = await Promise.all( [userPromise, reposPromise] );
    // const user = results[0];
    // const repos = results[1];
    const [user, repos] = await Promise.all([
      fetchFromGithub(`/users/${handle}`), 
      fetchFromGithub(`/users/${handle}/repos`)
    ]);
    console.log(user.name);
    console.log(`${repos.length} repos`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}




showUserAndRepos('mariusschulz');
