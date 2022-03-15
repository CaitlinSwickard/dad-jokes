const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  // this API requires headers: accept which is the config we created
  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => console.log(data))

}