//Selectors on the Page
const mangaInput = document.querySelector(".manga-input");
const mangaInputButton = document.querySelector(".input-btn");
const mangaList = document.querySelector(".manga-list");
const completeButton = document.querySelector('.complete-btn');

//Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    mangaInputButton.addEventListener('click', addManga);
    
    console.log("The DOM has loaded");
  });
//Functions
function addManga(event){
    event.preventDefault();
    //AddManga Div
    const mangaDiv = document.createElement('div');
    mangaDiv.classList.add('manga-div');
    //Create Li
    debugger;
    const addedManga = document.createElement('li');
    addedManga.innerText = mangaInput.value;
    addedManga.classList.add('manga-title');
    mangaDiv.appendChild(addedManga);
    //Check Mark Button
    debugger;
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check" ></i>';
    completedButton.classList.add("complete-btn");
    mangaDiv.appendChild(completedButton);
    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteButton.classList.add("delete-btn");
    mangaDiv.appendChild(deleteButton); 
    //Append to List
    mangaList.appendChild(mangaDiv);
    //Clear Manga Input value
      mangaInput.value = "";
      //Event Listener for Delete Button to Remove card from DOM
    deleteButton.addEventListener("click", () => {
        mangaDiv.remove();
    })
    //Event Listener for Complete Button to symbolize Manga Title being READ, and now to Rate
    completedButton.addEventListener("click", createStarRating);
}


function createStarRating(){
    const starWrapper = document.querySelector(".stars");
    //Variable to grab All of the Stars
    const allStars = document.querySelectorAll('.stars i');
    debugger;
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
    debugger;
    //document.querySelector('.manga-title').appendChild(stars);
  
    document.getElementsByClassName('manga-title').appendChild(stars);
    debugger;
    
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
function getData(){
fetch(' https://danbooru.donmai.us/profile.json?api_key=wFUJdgPgByq54WpWambRDtkd&login=danielriano',{
    //'Accept': application/vnd.api+json,
    //'Content-Type': application/vnd.api+json
})

    .then(res => res.json())
    //.then(res => res.text())
.then(data => console.log(data))

}
