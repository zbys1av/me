import './style.scss';

console.log('Webpack starter with SCSS and dev server');

window.addEventListener("click", test);


function test() {
    const selObj = window.getSelection();
    console.log(selObj);
    const selRange = selObj.getRangeAt(0);
    // do stuff with the range
  }