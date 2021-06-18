/* add player tags */

let player = document.getElementById("player");
player.className = "player";
let image = document.createElement("img");
player.append(image);

image.src = 'components/player/asset/lars.png';
image.className = 'player__stop--down';

/* add events */

document.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (event.key == '1') image.src = 'components/player/asset/lars.png';
  if (event.key == '2') image.src = 'components/player/asset/levi.png';
  if (event.key == '3') image.src = 'components/player/asset/lenny.png';
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.key == 'ArrowUp') image.className = 'player__walk--up';
  if (event.key == 'ArrowDown') image.className = 'player__walk--down';
  if (event.key == 'ArrowRight') image.className = 'player__walk--right';
  if (event.key == 'ArrowLeft') image.className = 'player__walk--left';
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.key == 'ArrowUp') image.className = 'player__stop--up';
  if (event.key == 'ArrowDown') image.className = 'player__stop--down';
  if (event.key == 'ArrowRight') image.className = 'player__stop--right';
  if (event.key == 'ArrowLeft') image.className = 'player__stop--left';
});