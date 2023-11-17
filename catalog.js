const puzzleInventory = [
  {
  title: "puzzle one",
  size: "Size: 50 pieces",
  difficulty: "Difficulty: Easy",
  theme: "Theme: festive",
  img: "assets/1.jpeg",
},
{
  title: "puzzle two",
  size: "Size: 100 pieces",
  difficulty: "Difficulty: Medium",
  theme: "Theme: festive",
  img: "assets/2.jpeg",
},
{
  title: "puzzle three",
  size: "Size: 100 pieces",
  difficulty: "Difficulty: Hard",
  theme: "Theme: festive",
  img: "assets/3.jpeg",
},


];

function createPuzzleCard(puzzle) {
  //append main section to the body of the document
  const body = document.querySelector("body");
  const mainSection = document.querySelector("#main");
  body.append(mainSection);

  //container for the puzzleCard Element
  const puzzleCardsElement = document.createElement("div");
  puzzleCardsElement.classList.add("puzzleCardsElement");
  mainSection.append(puzzleCardsElement);

  //container for puzzles
  const puzzleCard = document.createElement("div");
  puzzleCard.classList.add("puzzleCard");
  puzzleCardsElement.appendChild(puzzleCard);

  //heading for puzzle title
  const puzzleItemTitle = document.createElement("h2");
  puzzleItemTitle.id = "title";
  puzzleItemTitle.textContent = puzzle.title;
 

  // puzzle size
  const puzzleItemSize = document.createElement("div");
  puzzleItemSize.id = "size";
  puzzleItemSize.textContent = puzzle.size;
 

  //puzzle difficulty
  const puzzleDifficultyLevel = document.createElement("div");
  puzzleDifficultyLevel.id = "difficulty";
  puzzleDifficultyLevel.textContent = puzzle.difficulty;


  //puzzle theme
  const puzzleTheme = document.createElement("span");
  puzzleTheme.id = "theme";
  puzzleTheme.textContent = puzzle.theme;


  //image element for puzzle
  const puzzleImageElement = document.createElement("img");
  puzzleImageElement.id = "puzzle-cover";
  puzzleImageElement.setAttribute("src", puzzle.img);

  puzzleCard.append(puzzleImageElement);
  puzzleCard.append(puzzleItemTitle);
  puzzleCard.append(puzzleItemSize);
  puzzleCard.append(puzzleDifficultyLevel);
  puzzleCard.append(puzzleTheme);

}

//loop to create puzzle list
window.onload = function () {
    for (let puzzle of puzzleInventory) {
        createPuzzleCard(puzzle);
    }
  };

