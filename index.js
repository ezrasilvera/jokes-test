$( document ).ready(function() {
    getJokeListener();
});

function getJokeListener() {
	$("#get-joke").on("click", getJoke)
}

const getJoke = () => {
	let headers = new Headers({'Accept': 'application/json'})
	let request = new Request('https://api.chucknorris.io/jokes/random', {headers: headers});
	fetch(request)
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(jokeJson) {
	    putJokeOnPage(jokeJson)
	  });
}

const putJokeOnPage = (jokeJson) => {
	$("#joke p").html(jokeJson.joke)
}

