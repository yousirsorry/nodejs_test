let cursor = false;
let moveHandler = null;

const handle = (e, cursorBox) => {
  const posx = e.clientX;
  const posy = e.clientY;
  cursorBox.style.position = 'absolute';
  cursorBox.style.pointerEvents = 'none';
  cursorBox.style.top = `${posy - 18}px`;
  cursorBox.style.left = `${posx - 18}px`;
};

function Get() {
  if (!cursor) {
    const cursorBox = document.createElement('div');
    cursorBox.classList.add('box');
    cursorBox.id = 'box';
    document.body.appendChild(cursorBox);

    moveHandler = (e) => handle(e, cursorBox);
    document.addEventListener('mousemove', moveHandler);

    const pa = document.getElementById('pa');
    if (pa) pa.style.display = "none";

    document.body.style.cursor = "none";
    cursor = true;
  }
}

function Chicken() {
  if (!cursor) {
    const cursorBox = document.createElement('div');
    cursorBox.classList.add('chicken');
    cursorBox.id = 'box2';
    document.body.appendChild(cursorBox);

    moveHandler = (e) => handle(e, cursorBox);
    document.addEventListener('mousemove', moveHandler);

    const pa = document.getElementById('pa');
    if (pa) pa.remove();

    document.body.style.cursor = "none";
    cursor = true;

    
        setTimeout(() => {
          if (cursorBox.classList.contains('chicken')) {
            cursorBox.classList.remove('chicken');
            cursorBox.classList.add('cooked');
          }
        }, 15000);
    
  }
}

function Fire() {
  if (cursor) {
    const fire = document.getElementById('fire');
    if (fire) fire.classList.add('fire');

    const campfire = document.getElementById('campfire');
    if (campfire) campfire.remove();

    const realfire = document.getElementById('fire_img');
    if (realfire) realfire.style.display = "block";

    const cursorBox1 = document.getElementById('box');
    const cursorBox2 = document.getElementById('box2');
    if (cursorBox1) cursorBox1.remove();

    cursor = false;
    document.body.style.cursor = "default";

    if (moveHandler) {
      document.removeEventListener('mousemove', moveHandler);
      moveHandler = null;
    }

    const pa = document.getElementById('pa');
    if (pa) {
      pa.style.display = "block";
      pa.onclick = Chicken;
    }
  }
}
