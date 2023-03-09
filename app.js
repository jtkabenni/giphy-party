const gifSection = document.querySelector("#gifs");
const searchForm = document.querySelector("#search-field");
const searchButton = document.querySelector("#submit");
const removeButton = document.querySelector("#remove-images");

//handles search event
function searchHandler(evt) {
  evt.preventDefault();
  if (searchForm.value !== "") {
    getGif(searchForm.value);
  }
  searchForm.value = "";
}
//sends request to giphy API
async function getGif(term) {
  const result = await axios.get(
    `https://api.giphy.com/v1/gifs/random?api_key=wBi71TLOWLfKHH88c8jwA7h3TJvQFZ4K&tag=${term}&limit=1`
  );
  const url = result.data.data.images.downsized_medium.url;
  appendGif(url);
}
//appends random gif to gif section
function appendGif(url) {
  const div = document.createElement("div");
  const gif = document.createElement("img");
  div.classList.add("gif");
  gif.src = url;
  div.append(gif);
  gifSection.append(div);
}
//deletes gifs
function removeGifs() {
  gifSection.innerHTML = "";
  searchForm.value = "";
}

searchForm.addEventListener("submit", searchHandler);
searchButton.addEventListener("click", searchHandler);
removeButton.addEventListener("click", removeGifs);
