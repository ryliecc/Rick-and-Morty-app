import { fetchCharacters } from "../../index.js";

export function createSearchBar() {
  let searchQuery = "";
  const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]'
  );
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.setAttribute("data-js", "search-bar");
  searchBar.setAttribute("action", "");
  /* searchBar.setAttribute("onsubmit", "console.log(`searchbar was submitted`)"); */
  searchBar.innerHTML = `<input
  name="query"
  class="search-bar__input"
  type="text"
  placeholder="search characters"
  aria-label="character name"
/>
<button class="search-bar__button" aria-label="search for character">
  <img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />
</button>`;
  searchBarContainer.append(searchBar);
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("search bar was submitted");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    searchQuery = data.query;
    fetchCharacters(searchQuery);
    event.target.reset();
  });
}
