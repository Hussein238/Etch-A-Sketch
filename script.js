const container = document.getElementById("container");

    const conWidth = 700;
    
   container.style.width = conWidth + "px";
   



function NumSquares(e){ // make a row grid
    let totalSquares = Math.pow(e,2);
for (let i = 0; i < totalSquares ; i++ ){
    const divs = document.createElement('div');
    divs.classList.add('divs');
    divs.style.width = ((conWidth/e) + 'px');
   divs.style.height = ((conWidth/e) + 'px');
    container.appendChild(divs); 
    }
  
}
let squares=16;

const click= document.getElementById('apply');

function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
} 

click.addEventListener('click', function(){
    reset();
    let newSize= document.getElementById('size').value;
    if (newSize > 100){
        newSize = 100;
    }
   NumSquares(newSize);
     
});


NumSquares(squares);





function randomColour(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

container.addEventListener('mouseover', (a) => {
   
  

    a.target.style.backgroundColor =  "black";

});


/*const button = document.createElement('button'); // make a colour button
button.innerText = 'colour';
button.classList.add('button');
document.body.appendChild(button);  // changes to a random colour 


button.addEventListener('click', () => {
     randomColour();
     
     
});
*/

/*function clear() {
    const eachSquare = document.querySelector('#clear');
   return eachSquare.style.backgroundColor = "red";
    
};

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear(red));

    function changeColor (){
*/




