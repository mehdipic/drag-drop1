const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('empty');

// fill listenners
fill.addEventListener('dragstart',dragStart);
fill,addEventListener('dragend',dragEnd);

// Loop through empties and call drag events
for (const empty of empties) {
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}
// Drag Functions
function dragStart(){
//    console.log('start');
  this.className += 'hold';
  setTimeout(() => ( this.className = 'invisible'),0);
}

function dragEnd(){
//   console.log('end');
   this.className = 'fill';

}

function dragOver(){
    e.preventDefault();
// console.log('over');

}

function dragEnter(e){
    // console.log('enter');
    e.preventDefault();
    this.className += 'hovered';
}

function dragLeave(){
    // console.log('leave');
    // e.preventDefault(e);
    this.className = 'empty';

}

function dragDrop(e){
    // console.log('drop');
    // e.preventDefault(e);
    this.className = 'empty';
    this.append(fill);
}