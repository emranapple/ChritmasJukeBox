const player = document.getElementById("player")

function playSong(id) {
  
  const songsFromYoutube = `https://www.youtube.com/embed/${id}?autoplay=1`
  
  player.src = songsFromYoutube
  
}

function hidePlayer() {
  player.style.display = 'none'
}

function showPlayer() {
  player.style.display = 'block'
}

// Shuffle Select with hard coded array

const songsArray = ['PoAjmmD89Vw', '1qYz7rfgLWE', 'R_vmuL0gjU0', 'WaNwEkCeZrE', 'AN_R4pR1hck']

function shuffleSong() {
  let shuffle = songsArray[Math.floor(Math.random() * songsArray.length)]
  playSong(shuffle)
}

// FavouriteList with hard coded array

const myList = ['v5mdybeyLVc', 'FSCo5dZ42v8', 'R_vmuL0gjU0']

function myPlayList() {
  let list = myList[Math.floor(Math.random() * myList.length)]
  playSong(list)
}

