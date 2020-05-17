console.log ("HIIII");

let basicText = document.getElementById('basic');

// window.setTimeout(() => {
//     basicText.innerHTML = 'Hello world';
// }, 1000);

basicText.onclick  = function () {
    basicText.innerHTML = "This was clicked";
    basicText.style.backgroundColor = '#ffd54f';
}

basicText.addEventListener ('mouseover', () => {
    basicText.innerHTML = 'HELOOOO';
})

basicText.addEventListener ('mouseleave', () => {
    basicText.innerHTML = 'Basic JS';
})
