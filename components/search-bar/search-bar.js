export function createSearchBar() {
  const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]'
  );
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.setAttribute("data-js", "search-bar");
  searchBar.setAttribute("action", "");
  searchBar.setAttribute("onsubmit", "console.log(`search bar submitted`)");
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
  /* searchBar.onSubmit((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    searchQuery = data.query;
    fetchCharacters();
    event.target.reset();
  }); */
  searchBarContainer.append(searchBar);
}
