//Selectors on the Page
const mangaInput = document.querySelector(".manga-input");
const mangaInputButton = document.querySelector(".input-btn");
const mangaList = document.querySelector(".manga-list");

//Event Listeners
mangaInputButton.addEventListener('click', function(event){
    fetch('http://localhost:3000/mangaData')
        .then(res => res.json())
    .then(function(data){
        addManga(event, data);
    }) 
    return event.preventDefault();
});
function updateRating(){
    fetch('http://localhost:3000/mangaData',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
}
//Rendering ImgURLs from db.json onto the DOM under 
//appropriate manga title
//Fetch Data


//Functions
function addManga(event, data){
    event.preventDefault();
    //Create Li for Manga
    const addedManga = document.createElement('li');
    addedManga.innerText = mangaInput.value
    addedManga.classList.add('manga-title');
    mangaList.appendChild(addedManga);
    //Creating a function to take the Data and append to DOM
    function getMangaImages(data){
        //Variable to capture the Data Array Object thats name specifically match the Input Manga Title
        const rightObject = data.filter((object) => object.name.toUpperCase() === mangaInput.value.toUpperCase());
        //Adding the IMG and Description onto the DOM using innerHTML
        addedManga.innerHTML += `
        <img src="${rightObject[0]["imageURL"]}" class="pict">
        <li>${rightObject[0]["description"]}</li>
        ` 
    }
    getMangaImages(data);
    //Clear Manga Input value
    mangaInput.value = "";
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
    //Event Listener for Delete Button to Remove card from DOM
    deleteButton.addEventListener("click", () => {
        addedManga.remove();
    })
    //Event Listener for READ"Complete" Button to symbolize Manga being READ, now Rate
    readButton.addEventListener('click', function starLauncher(event){
        readButton.removeEventListener('click', starLauncher);
        return createStarRating(event);
    })
}
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
      star.addEventListener('click', (event) => {
            starWrapper.classList.add("disabled")
            allStars.forEach((otherStar, otherIndex) => {
               if(otherIndex <= clickedIndex){
                     otherStar.classList.add("active");
                 }
             })
            console.log(event)
            console.log(`Rated ${clickedIndex + 1} outta 10!`)
        })
    })
}



