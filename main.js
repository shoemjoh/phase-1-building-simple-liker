// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.getElementsByClassName("like");

// Iterate through each element with the class "like"
for (let heart of hearts) {
  // Add a click event listener to each element
  heart.addEventListener('click', function () {
    mimicServerCall()
      .then(function (res) {
        if (heart.innerText.includes(EMPTY_HEART)) {
          heart.innerHTML = `<span class="like-glyph">${FULL_HEART}</span>`;
          heart.classList.add('activated-heart');
        } else {
          heart.innerHTML = `Like! <span class="like-glyph">${EMPTY_HEART}</span>`;
          heart.classList.remove('activated-heart');
        }
        console.log(res); // Log the response after the promise resolves
      })
      .catch(function (error) {
        let hideClass = document.getElementsByClassName('hidden');
        // Loop through the collection and remove the 'hidden' class from each element
        for (let element of hideClass) {
          element.classList.remove('hidden');
          setTimeout(function () {
            element.classList.add('hidden');
          }, 3000);
        }
      });
  });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
