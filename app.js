// const jokeBtn = document.querySelector('.gen-btn');
// const apiURL = 'https://icanhazdadjoke.com';
// const joke = document.querySelector('.joke')

// jokeBtn.addEventListener('click', getJoke);

// async function getJoke(){
//     const result = await fetch(apiURL, {
//         headers:{
//             'Accept': 'application/json'
//         }
//     })
//     const jokeObject = await result.json();
//     console.log(jokeObject.joke)
//     joke.innerHTML = jokeObject.joke;
// }

const button = document.querySelector('.gen-btn');
const apiURL = 'https://icanhazdadjoke.com';
const joke = document.querySelector('.joke');

button.addEventListener('click', getJoke)

async function getJoke(){
    const response = await fetch(apiURL, {
        headers:{
            'Accept': 'application/json'
        }
    })
    const jokeObj = await response.json();
    console.log(jokeObj.joke);
    joke.textContent = jokeObj.joke;
}