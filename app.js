//Selectors on the Page
const mangaInput = document.querySelector(".manga-input");
const mangaList = document.querySelector(".manga-list");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#manga-form");
    form.addEventListener('submit', fetchManga)
})
//Functions
function fetchManga(){
    event.preventDefault();
    fetch('http://localhost:3000/mangaData')
            .then(res => res.json())
        .then(function(data){
            addManga(data);
    }) 
}

function addManga(data){
    //Create Li for Manga
    const addedManga = document.createElement('li');
    addedManga.innerText = mangaInput.value
    addedManga.classList.add('manga-title');
    mangaList.appendChild(addedManga);
    //Creating a function to take the Data and append to DOM
    //Variable to capture the Data Array Object thats name specifically match the Input Manga Title
    const rightObject = data.filter((object) => object.name.toUpperCase() === mangaInput.value.toUpperCase());
    //Adding the IMG and Description onto the DOM using innerHTML
    addedManga.innerHTML += `
        <img src="${rightObject[0]["imageURL"]}" class="pict">
        <p>${rightObject[0]["description"]}</p>
        ` 
    
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
        createRatings(event);
    })
}

function createRatings(event){
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'ratings'
    //Creating Each of the Stars
    buttonsDiv.innerHTML = `
    <i class="far fa-heart" id="positive"></i>
    <i class="far fa-thumbs-down" id="negative"></i>
    `
    event.target.appendChild(buttonsDiv);

    
    buttonsDiv.querySelector("i.far.fa-heart").addEventListener('click', function(event){
        event.target.classList.add("disabled");
    })
    buttonsDiv.querySelector("i.far.fa-thumbs-down").addEventListener('click', (event) => {
        event.target.classList.add("disabled")
    })
}