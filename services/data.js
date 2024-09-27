export async function fetchCardData(length) {
  const apiUrl = "https://rickandmortyapi.com/api/character/";
  let characterIds = [];
  for (let i = 0; i < length; i++) {
    characterIds.push(i + 1);
  }
  const endUrl = apiUrl + characterIds.join(",");

  let result;
  try {
    const response = await fetch(endUrl, { mode: "cors" });
    const data = await response.json();

    result = data.map((character) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
      };
    });
  } catch (e) {
    console.log(e);
  }
  return result;
}

export function makeRandomArray(characters) {
  const copyArray = [...characters];
  let result = [];
  while (copyArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * copyArray.length);
    result.push(copyArray[randomIndex]);
    copyArray.splice(randomIndex, 1);
  }

  return result;
}
