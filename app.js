//Selectors on the Page
const mangaInput = document.querySelector(".manga-input");
const mangaInputButton = document.querySelector(".input-btn");
const mangaList = document.querySelector(".manga-list");

//Event Listeners
mangaInputButton.addEventListener('click', function(event){
    fetch('http://localhost:3000/mangaData')
        .then(res => res.json())
    .then(function(data){
        debugger;
        console.log(data)
        debugger;
        addManga(event, data);
    }) 
    debugger;
    event.preventDefault();
    return console.log(event.target);
    
});
//Rendering ImgURLs from db.json onto the DOM under 
//appropriate manga title
//Fetch Data
function getMangaData(){
     
}

//Functions
function addManga(event, data){
    event.preventDefault();
    //Create Li for Manga
    const addedManga = document.createElement('li');
    addedManga.innerText = mangaInput.value;
    // addedManga.innerHTML += `
    // <img src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" class="pict"> `
    addedManga.classList.add('manga-title');
    mangaList.appendChild(addedManga);
    //Read Mark Button
    const readButton = document.createElement('button');
    readButton.innerHTML = '<i class="fas fa-check" ></i>';
    readButton.classList.add("read-btn");
    addedManga.appendChild(readButton);
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
    //Event Listener for READ"Complete" Button to symbolize Manga Title being READ, and now to Rate
    readButton.addEventListener('click', function starLauncher(event){
        readButton.removeEventListener('click', starLauncher);
        return createStarRating(event);
       })
}
//this event is the Input button Event, i need the completedButton Event
function createStarRating(event){
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
    //Using the event to specifically select which <li> i want to append the stars too
    event.target.appendChild(stars);
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



