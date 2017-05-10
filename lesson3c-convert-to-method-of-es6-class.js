const fetch = require('node-fetch');


class GitHubApiClient {
	// this is an ES6 class method
	// back to function declaration style to define as method
	async fetchUser(handle) {
	  const url = `https://api.github.com/users/${handle}`;
	  const response = await fetch(url);
	  const user = await response.json();
	  return user;
	}

}
/*
  iife a.k.a. immediate invoked function expression
*/

(async function(){
  const client = new GitHubApiClient();
  const user = await client.fetchUser('mariusschulz');
  console.log(user.name);
  console.log(user.location);
})();


