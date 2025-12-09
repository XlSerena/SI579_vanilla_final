const mouseMessage = document.querySelector('#mouse-message');
mouseMessage.addEventListener('mouseenter', (e) => {
  console.log('MOUSE ENTER!!!')
  e.target.textContent = 'MOUSE POINTER MOUSE POINTER!';
})
mouseMessage.addEventListener('mouseleave', (e) => {
  console.log('MOUSE LEAVE!!!')
  // same thing as e.target .... here
  //but it's not always the same
  mouseMessage.textContent = 'No Mouse Pointer Here!'
})