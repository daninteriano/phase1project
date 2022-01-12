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

//Functions
function addManga(event, data){
    event.preventDefault();
    //Create Li for Manga
    const addedManga = document.createElement('li');
    addedManga.innerText = mangaInput.value
    addedManga.classList.add('manga-title');
    // addedManga.id = data.filter((object) => {
    //     object.name === mangaInput.value;
    //     return object.id
    //  })
    mangaList.appendChild(addedManga);
    //Creating a function to take the Data and append to DOM
    function getMangaImages(data){
        //Variable to capture the Data Array Object thats name specifically match the Input Manga Title
        const rightObject = data.filter((object) => object.name.toUpperCase() === mangaInput.value.toUpperCase());
        //Adding the IMG and Description onto the DOM using innerHTML
        addedManga.innerHTML += `
        <img src="${rightObject[0]["imageURL"]}" class="pict">
        <p>${rightObject[0]["description"]}</p>
        ` 
    }
    getMangaImages(data);
    //Clear Manga Input value
    mangaInput.value = "";
    //Read Mark Button
    const readButton = document.createElement('button');
    readButton.innerText = 'Done';
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
        return createStarRating(event, data);
    })
}
function createStarRating(event){
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'btns'
    //Creating Each of the Stars
    buttonsDiv.innerHTML = `
    <i class="far fa-heart" id="dislike"></i>
    <i class="fas fa-thumbs-down"></i>
    `
    event.target.appendChild(buttonsDiv);
    document.querySelector("#dislike").addEventListener('click', function(event){
        event.target.innerHTML = `
        <i class="fas fa-heart" id="like"></i>
        `
    })

}
    
//<i class="fas fa-heart" id="like"></i>
//let eventStars = event.target.childNodes[1].getElementsByTagName("i")
    //console.log(eventStars);
