// function createStarRating(event, data){

//   //Create Div containter for All of the Stars
//   const starsDiv = document.createElement('div');
//   starsDiv.className = 'stars'
//   //Creating Each of the Stars
//   starsDiv.innerHTML = `
//   <h4>Rating</h4>
//   <input type="radio" name="stars" id="star1">
//   <label for="star1" class="fas fa-star"></label>
//   <input type="radio" name="stars" id="star2">
//   <label for="star2" class="fas fa-star"></label>
//   <input type="radio" name="stars" id="star3">
//   <label for="star3" class="fas fa-star"></label>
//   <input type="radio" name="stars" id="star4">
//   <label for="star4" class="fas fa-star"></label>
//   <input type="radio" name="stars" id="star5">
//   <label for="star5" class="fas fa-star"></label>
//   `
//     //Variable to grab All of the Stars
//     const stars = document.querySelectorAll('.stars i');
//     //Event Listener for Stars to be clicked for Rating
//     stars.forEach((star, clickedIndex) => {
//         star.addEventListener('click', (event) => {
//             event.path[1].classList.add("disabled")
//             stars.forEach((otherStar, otherIndex) => {
//                if(otherIndex <= clickedIndex){
//                      otherStar.classList.add("active");
//                  }
//              });    
//         console.log(`Rated ${clickedIndex +1} outta 5!`)
//         })
//     })
// }
//let eventStars = event.target.childNodes[1].getElementsByTagName("i")
    //console.log(eventStars);
//let grabbedStars = event.path[1].getElementsByTagName("i")