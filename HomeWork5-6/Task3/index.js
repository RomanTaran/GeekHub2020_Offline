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
    if (ind == index) {
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
var DragManager = new function () {
  var dragObject = {};
  var self = this;
  let rightBoundary = mainField.getBoundingClientRect().right - 2;
  let leftBoundary = mainField.getBoundingClientRect().left;
  let topBoundary = mainField.getBoundingClientRect().top - 8;
  let bottomBoundary = mainField.getBoundingClientRect().bottom - 10;

  function onMouseDown(e) {
    if (e.which != 1) return;
    var elem = e.target.closest('.draggable');
    if (!elem) return;
    dragObject.elem = elem;
    dragObject.downX = e.pageX;
    dragObject.downY = e.pageY;
    return false;
  }

  function onMouseMove(e) {
    if (!dragObject.elem) return;
    if (!dragObject.avatar) {
      var moveX = e.pageX - dragObject.downX;
      var moveY = e.pageY - dragObject.downY;
      if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
        return;
      }
      dragObject.avatar = createAvatar(e);
      if (!dragObject.avatar) {
        dragObject = {};
        return;
      }
      var coords = getCoords(dragObject.avatar);
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

  function onMouseUp(e) {
    if (dragObject.avatar) {
      finishDrag(e);
    }
    dragObject = {};
  }

  function finishDrag(e) {
    var dropElem = findDroppable(e);
    if (!dropElem) {
      self.onDragCancel(dragObject);
    } else {
      self.onDragEnd(dragObject, dropElem);
    }
  }

  function createAvatar(e) {
    var avatar = dragObject.elem;
    var old = {
      parent: avatar.parentNode,
      nextSibling: avatar.nextSibling,
      position: avatar.position || '',
      left: avatar.left || '',
      top: avatar.top || '',
      zIndex: avatar.zIndex || ''
    };
    avatar.rollback = function () {
      old.parent.insertBefore(avatar, old.nextSibling);
      avatar.style.position = old.position;
      avatar.style.left = old.left;
      avatar.style.top = old.top;
      avatar.style.zIndex = old.zIndex
    };
    return avatar;
  }

  function startDrag(e) {
    var avatar = dragObject.avatar;
    document.body.appendChild(avatar);
    avatar.style.zIndex = 9999;
    avatar.style.position = 'absolute';
  }

  function findDroppable(event) {
    dragObject.avatar.hidden = true;
    var elem = document.elementFromPoint(event.clientX, event.clientY);
    dragObject.avatar.hidden = false;
    if (elem == null) {
      return null;
    }

    return elem.closest('.droppable');
  }

  document.onmousemove = onMouseMove;
  document.onmouseup = onMouseUp;
  document.onmousedown = onMouseDown;

  this.onDragEnd = function (dragObject, dropElem) {
  };
  this.onDragCancel = function (dragObject) {
  };
};


function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}