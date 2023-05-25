import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    if (response.ok) {
      const data = await response.json();
      cardContainer.innerHTML = "";
      maxPage = data.info.pages;
      console.log(data);
      console.log(maxPage);
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
      return data.results;
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An error occured");
  }
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  console.log("next Button was clicked");
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  console.log("prev Button was clicked");
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});
