const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

// using async and await for API call
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()
  jokeEl.innerHTML = data.joke
}



// this is using the .then 
// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

//   // this API requires headers: accept which is the config we created
//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })

// }