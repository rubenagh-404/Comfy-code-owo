let FONT_SIZE = document.getElementById('myId').style.fontSize;
FONT_SIZE = parseFloat(FONT_SIZE); // parseFloat() er en innebygget JS funksjon


function increaseFont(size) {
  FONT_SIZE += size;
  console.log('INCREASE', FONT_SIZE);
  document.getElementById('myId').style.fontSize = `${FONT_SIZE}pt`;
}

function decreaseFont(size) {
  FONT_SIZE -= size;
  if (FONT_SIZE < 5) {
    FONT_SIZE = 5;
  }
  console.log('DECREASE', FONT_SIZE);
  document.getElementById('myId').style.fontSize = `${FONT_SIZE}pt`;
}

function init() {
  document.getElementById('myId').style.fontSize = `${FONT_SIZE}pt`;
}

init();
