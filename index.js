/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")
  
  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number
  
  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
  <h3>${player.name} (<em>${player.nickname}</em>)</h3>
  <img src="${player.photo}" alt="${player.name}">
  <p class="likes">${player.likes} likes</p>
  <button id="${player.number}" class="like-button">❤️</button>
  `
//   let button = document.querySelector(`div[data-number="${player.number}"] button`)
//   console.log(button)
//   button.addEventListener('click', function() {
//     player.likes += 1
// })

playerContainer.append(playerDiv)
}


// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)


function makeLikeButtonWork(player) {
  let button = document.getElementById(`${player.number}`)
  button.addEventListener('click', function() {
    player.likes += 1
    let showLikes = document.querySelector(`div[data-number="${player.number}"] p`)
    showLikes.innerHTML = player.likes + " likes"
  })
}


PLAYERS.forEach(makeLikeButtonWork)



/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
let header = document.querySelector("h1#header")
header.addEventListener("click", function(e) {
  toggleColor(header)
})



/***** Deliverable 2 *****/
let form = document.getElementById('new-player-form')
form.addEventListener('submit', function() {
  event.preventDefault()
  let player =  {
    number: form.number.valueAsNumber,
    name: form.name.value,
    nickname: form.nickname.value,
    photo: form.photo.value,
    likes: 0
  }
  renderPlayer(player)
  makeLikeButtonWork(player)
})
/***** Deliverable 3 *****/
