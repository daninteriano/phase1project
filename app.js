//Selectors on the Page
const mangaInput = document.querySelector(".manga-input");
const mangaInputButton = document.querySelector(".input-btn");
const mangaList = document.querySelector(".manga-list");

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
    const addedManga = document.createElement('li');
    addedManga.innerText = mangaInput.value;
    addedManga.classList.add('manga-title');
    mangaDiv.appendChild(addedManga);
    //Check Mark Button
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
}
//Creating Event Listener for Complete Button to trigger Star Rating Function

document.querySelector('.complete-btn').addEventListener('click', createStars);

//Creating Stars
function createStars(event){
    event.preventDefault();

    //Creating Stars
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('star-ratings')
    starsContainer.innerHTML = `
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    `;
    //Append Stars to the DOM onto the Manga-Title
    document.querySelector('.manga-div').appendChild(starsContainer)
    console.log(starsContainer)

}
//Creating DeleteButton to remove AddedManga from the DOM


//Fetch Data
function getData(){
fetch('https://kitsu.io/api/edge/anime',{
    //'Accept': application/vnd.api+json,
    //'Content-Type': application/vnd.api+json
})

    .then(res => res.json())
    //.then(res => res.text())
.then(data => console.log(data))

}
