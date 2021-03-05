document.getElementById('cinnabun').addEventListener('click', game)

document.getElementById('what').addEventListener('click', count)

let points = 0
let point = 0

function game () {
  points = parseInt(points)
  points = points + 1
  document.getElementById('points').innerHTML = points
  if (points === 50) {
    document.getElementById('cinnabun').style.backgroundImage = "url('./Images/dress.png')"
  } else if (points === 100) {
    document.getElementById('cinnabun').style.backgroundImage = "url('./Images/bubble.png')"
  } else if (points === 150) {
    document.getElementById('cinnabun').style.backgroundImage = "url('./Images/toy.png')"
  } else {
    document.getElementById('great').innerHTML = 'Great job!'
  }
}

function count () {
  document.getElementById('points').innerHTML = points
  points = parseInt(points)
  point = parseInt(point)
  point = 150 - points

  for (let points = 0; points < 150; points++) {
    document.getElementById('need').innerHTML = 'You still need ' + point + ' to complete the game'
  }
}
