import { createCharacterCard } from "./components/card/card.js";
import createSearchBar from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

createSearchBar();

export async function fetchCharacters(pageNumber, searchQueryText) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${searchQueryText}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      cardContainer.innerHTML = "";
      maxPage = data.info.pages;
      pagination.textContent = pageNumber + " / " + maxPage;
      data.results.forEach((character) => {
        createCharacterCard(
          character.image,
          character.name,
          character.status,
          character.species,
          character.type,
          character.episode.length
        );
      });
      console.log("characters fetched");
      return data.results;
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An error occured");
  }
}

fetchCharacters(page, searchQuery);

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  } else {
    alert(
      "There are no more discovered characters (yet). If you want to see more go and annoy the adult swim people to make more seasons. That's not my friggin' job."
    );
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  } else {
    alert(
      "This is not your elementary school math class. There are no negative numbers. Try something else, stupid."
    );
  }
});
