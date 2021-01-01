let blocks = document.querySelectorAll('.tagging-element');
let text = document.querySelectorAll('.tagging-title');
let closeButton = document.querySelectorAll('.delete');
let mainField = document.querySelector('.tagging-wrapper');
text.forEach((elem, index) => elem.addEventListener('click', () => {
  closeButton.forEach((element, ind) => {
    if (index === ind) {
      element.classList.remove('hide');
    } else {
      element.classList.add('hide');
    }
  })
  blocks.forEach((elem, ind) => {
    if (ind === index) {
      elem.classList.add('draggable');
    } else {
      elem.classList.remove('draggable');
    }
  })
}));
closeButton.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    blocks[index].classList.add('hide');
  })
});
let dragObject = {};
const rightBoundary = mainField.getBoundingClientRect().right - 2;
const leftBoundary = mainField.getBoundingClientRect().left;
const topBoundary = mainField.getBoundingClientRect().top - 8;
const bottomBoundary = mainField.getBoundingClientRect().bottom - 10;
document.onmousemove = onMouseMove;
document.onmouseup = onMouseUp;
document.onmousedown = onMouseDown;
function onMouseDown(e) {
  if (e.which !== 1) return;
  let elem = e.target.closest('.draggable');
  if (!elem) return;
  dragObject.elem = elem;
  dragObject.downX = e.pageX;
  dragObject.downY = e.pageY;
  return false;
}

function onMouseMove(e) {
  if (!dragObject.elem) return;
  if (!dragObject.avatar) {
    let moveX = e.pageX - dragObject.downX;
    let moveY = e.pageY - dragObject.downY;
    if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
      return;
    }
    dragObject.avatar = createAvatar(e);
    if (!dragObject.avatar) {
      dragObject = {};
      return;
    }
    let coords = getCoords(dragObject.avatar);
    dragObject.shiftX = dragObject.downX - coords.left;
    dragObject.shiftY = dragObject.downY - coords.top;
    startDrag(e);
  }
  let buttonDelete = dragObject.elem.querySelector('.delete');
  dragObject.avatar.style.left = Math.max(Math.min(e.pageX - dragObject.shiftX, rightBoundary - dragObject.avatar.clientWidth), leftBoundary) + 'px';
  dragObject.avatar.style.top = Math.max(Math.min(e.pageY - dragObject.shiftY, bottomBoundary - dragObject.avatar.clientHeight), topBoundary) + 'px';
  if (parseInt(dragObject.avatar.style.left) > (rightBoundary - dragObject.avatar.clientWidth - buttonDelete.clientWidth)) {
    buttonDelete.classList.add('pull-left');
  } else {
    buttonDelete.classList.remove('pull-left');
  }
  return false;
}

function onMouseUp() {
  dragObject = {};
}
function createAvatar() {
  let avatar = dragObject.elem;
  return avatar;
}

function startDrag() {
  let avatar = dragObject.avatar;
  document.body.appendChild(avatar);
  avatar.style.zIndex = 9999;
  avatar.style.position = 'absolute';
}
function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}