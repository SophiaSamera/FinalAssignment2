document.getElementById('cinnabun').addEventListener('click', game)

let points = 0
let point = 0

function game () {
  points = parseInt(points)
  point = parseInt(point)
  points = points + 1
  point = points - 150

  for (points =< 150) {
    document.getElementById('need').innerHTML = 'You still need ' + point + ' to complete the game'
  if (points == 50) {
  document.getElementById('cinnabun').style.backgroundImage = "url('./Images/dress.png')"
  } else if (points == 100) {
    document.getElementById('cinnabun').style.backgroundImage = "url('./Images/bubble.png')"
  } else if (points == 150) {
    document.getElementById('cinnabun').style.backgroundImage = "url('./Images/toy.png')"
  } else {
    document.getElementById('great').innerHTML = 'Great job!'
    }
  }
}