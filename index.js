//Selectors on the Page
const mangaInput = document.querySelector(".manga-input");
const mangaInputButton = document.querySelector(".input-btn");
const mangaList = document.querySelector(".manga-list");
const completeButton = document.querySelector('.complete-btn');

document.addEventListener("DOMContentLoaded", function() {
    mangaInputButton.addEventListener('click', addManga);
    
    console.log("The DOM has loaded");
  });

function addManga(event){
    event.preventDefault();
    
}