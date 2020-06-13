const form = document.querySelector("#form");
let image = document.querySelector("#image");
let setImage = document.querySelector("#setImage");
let topTextInput = document.querySelector("#top");
let topButton = document.querySelector("#preview-top-text");
let bottomTextInput = document.querySelector("#bottom");
let bottomButton = document.querySelector("#preview-bottom-text");
let submitButton = document.querySelector("#submit");
let imgDiv = document.querySelector("#meme-image");
let topDiv = document.querySelector("#Top-Text");
let bottomDiv = document.querySelector("#bottom-text");
let submitDiv = document.querySelector("#submit-div");
let list = document.querySelector('#list');

function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
  }
  
  
  const h1 = document.querySelector('h1')
  
  
  setInterval(function() {
  h1.style.color = randomRGB();
  }, 500);
  
  
  const letters = document.querySelectorAll('.letter');
  setInterval(function (){
  for(let letter of letters){
    letter.style.color = randomRGB();
  }
  }, 1000);
  






document.addEventListener("keyup", function(e){
  if (e.which == '13') {
    e.preventDefault();
  }
});

list.addEventListener("click", function(e){
  if (e.target.classList == "close") {
    e.target.parentNode.remove();
  }
});

form.addEventListener("click", function(e){
  let clickedId = e.target.id;
  
  if (clickedId === 'setImage') {  
    let newImg = document.createElement("img");
    let lis = document.querySelectorAll("li");
    let li = lis[0];


    
    meme = image.value;

    li.prepend(newImg);
    newImg.setAttribute('src', meme);    

  } else if (clickedId === 'preview-top-text') {
    let newP = document.createElement("p");
    let topText = topTextInput.value;
    
    let lis = document.querySelectorAll("li");
    let li = lis[0];


  

    newP.setAttribute("class", "top")

    newP.innerText = topText;
    li.append(newP);

  } else if (clickedId === 'preview-bottom-text') {
    let newP = document.createElement("p");
    let closeP = document.createElement("p");
    let bottomText = bottomTextInput.value;
    let lis = document.querySelectorAll("li");
    let li = lis[0];

 

    newP.setAttribute("class", "bottom");
    closeP.setAttribute("class", "close");

    closeP.innerText = "X";
    newP.innerText = bottomText;

    li.append(newP);
    li.append(closeP);   
    }
});

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  let newli = document.createElement("li");
 
  list.prepend(newli);

 

  form.reset();
});



