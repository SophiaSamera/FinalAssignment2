document.getElementById('cinnabun').addEventListener('click', game)

let points = 0
let point = 0

function game () {
  points = parseInt(points)
  point = parseInt(point)
  points = points + 1
  point = 150 - points

  for (points = 0; points < 150; point++) {
    document.getElementById('need').innerHTML = 'You still need ' + point + ' to complete the game'
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
}
