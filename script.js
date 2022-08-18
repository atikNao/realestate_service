const btn = document.getElementById('btn');
const colorCode = document.getElementById('color');

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexLength = hex.length;


btn.addEventListener('click', () =>{
    let hexColor = "#";
    for(let i =0; i<6; i++){
        hexColor += hex[getRandomNum()];
    }  
    document.body.style.backgroundColor = hexColor;
    colorCode.textContent = hexColor;
    console.log(hexColor);
});

function getRandomNum(){
   return Math.floor(Math.random() * hexLength);
}