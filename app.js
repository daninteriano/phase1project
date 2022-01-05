//Selectors on the Page
const mangaInput = document.querySelector(".manga-input");
const mangaInputButton = document.querySelector(".input-btn");
const mangaList = document.querySelector(".manga-list");
const completeButton = document.querySelector('.complete-btn');
//const mangasTitle = document.querySelector('.manga-title');
//Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    mangaInputButton.addEventListener('click', addManga);
    
    console.log("The DOM has loaded");
  });


//Functions
function addManga(event){
    event.preventDefault();
    //Create Li
    const addedManga = document.createElement('li');
    addedManga.innerText = mangaInput.value;
    addedManga.innerHTML += `
    <img src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" class="pict"> `
    addedManga.classList.add('manga-title');
    mangaList.appendChild(addedManga);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check" ></i>';
    completedButton.classList.add("complete-btn");
    addedManga.appendChild(completedButton);
    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteButton.classList.add("delete-btn");
    addedManga.appendChild(deleteButton); 
    //Clear Manga Input value
      mangaInput.value = "";
      //Event Listener for Delete Button to Remove card from DOM
    deleteButton.addEventListener("click", () => {
        addedManga.remove();
    })
    //Event Listener for Complete Button to symbolize Manga Title being READ, and now to Rate
    completedButton.addEventListener("click", createStarRating);
}



function createStarRating(){
    //Create Div containter for All of the Stars
    const stars = document.createElement('div');
    stars.className = 'stars'
    //Creating Each of the Stars
    stars.innerHTML = `
    <h4>Rating</h4>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i> 
    <i class="fas fa-star"></i> 
    <i class="fas fa-star"></i> 
    <i class="fas fa-star"></i>
    `
    //Appending the Stars onto the DOM
    document.querySelectorAll('li.manga-title').forEach(title => title.appendChild(stars));
    
    //Variable to grab All of the Stars
    const allStars = document.querySelectorAll('.stars i');
    const starWrapper = document.querySelector(".stars");
    //Event Listener for Stars to be clicked for Rating
    allStars.forEach((star, clickedIndex) => {
      star.addEventListener('click', () => {
         starWrapper.classList.add("disabled")
             allStars.forEach((otherStar, otherIndex) => {
               if(otherIndex <= clickedIndex){
                     otherStar.classList.add("active");
                 }
             })
            console.log(`Star of index ${clickedIndex + 1} was clicked!`)
        })
     })
     }



//Fetch Data
function getManga(){
fetch('http://localhost:3000/mangaData')
    .then(res => res.json())
.then(data => console.log(data))

}
