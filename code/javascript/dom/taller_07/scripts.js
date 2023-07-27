const elem = document.getElementById("cajita");
var id = null;
var pos = 0;

console.log()

function mover() {
  clearInterval(id);
  id = setInterval(frame, 5);
}

function frame() {
  if (pos == 350) {
    clearInterval(id);
  } else {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
  }
}
