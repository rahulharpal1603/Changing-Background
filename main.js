let hexadecimal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let body = document.getElementById('target');
let value = document.getElementById('value');
function change(){
    let random = hexadecimal[Math.floor(Math.random()*16)]
    color = `#${hexadecimal[Math.floor(Math.random()*16)]}${hexadecimal[Math.floor(Math.random()*16)]}${hexadecimal[Math.floor(Math.random()*16)]}${hexadecimal[Math.floor(Math.random()*16)]}${hexadecimal[Math.floor(Math.random()*16)]}${random}`
    body.style.backgroundColor = color;
    value.innerHTML = `The color code is ${color}`
}
