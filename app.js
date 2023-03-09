console.log("Let's get this party started!");
const gifSection = document.querySelector("#gifs");
const searchForm = document.querySelector("#search-field");
const searchButton = document.querySelector("#submit");
const removeButton = document.querySelector("#remove-images");

function searchHandler(evt) {
  evt.preventDefault();
  console.log(searchForm.value);
  if (searchForm.value !== "") {
    getGifPls(searchForm.value);
  }
  searchForm.value = "";
}

async function getGifPls(term) {
  const result = await axios.get(
    `https://api.giphy.com/v1/gifs/random?api_key=wBi71TLOWLfKHH88c8jwA7h3TJvQFZ4K&tag=${term}&limit=1`
  );
  const imgUrl = result.data.data.images.downsized_medium.url;
  console.log(result.data.data.images.downsized_medium.url);
  appendGif(imgUrl);
}

function appendGif(url) {
  console.log(url);
  const div = document.createElement("div");
  const gif = document.createElement("img");
  div.classList.add("gif");
  gif.src = url;
  div.append(gif);
  gifSection.append(div);
}

function removeGifs() {
  console.log("Delete");
  gifSection.innerHTML = "";
}

searchForm.addEventListener("submit", searchHandler);
searchButton.addEventListener("click", searchHandler);
removeButton.addEventListener("click", removeGifs);
