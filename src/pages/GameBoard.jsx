import { useState } from "react";
import Header from "../components/Header";
import "../styles/layout.css";
import { useEffect } from "react";
import { fetchCardData, makeRandomArray } from "../../services/data";
import GridCardList from "../components/GridCardList";

export default function GameBoard() {
  const [characters, setCharacters] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const ignore = false;
    fetchCardData(12).then((result) => {
      if (!ignore) {
        setCharacters(makeRandomArray(result));
      }
    });
  }, []);

  function handleClickCard(id) {
    const selectedId = selectedIds.find((selectedId) => selectedId === id);

    if (selectedId) {
      // If the card is already click by user, display lose
      console.log("lose");
      setBestScore(
        selectedIds.length > bestScore ? selectedIds.length : bestScore
      );

      // Reset the game
      setSelectedIds([]);
    } else {
      // Or else the card not click by user, add it to selectedIds
      setSelectedIds([...selectedIds, id]);
      setCharacters(makeRandomArray(characters));
    }
    if (selectedIds.length === characters.length - 1) {
      console.log("win");
      setBestScore(selectedIds.length);
    }
  }

  return (
    <>
      <Header score={selectedIds.length} bestScore={bestScore} />
      <GridCardList characters={characters} handleClickCard={handleClickCard} />
    </>
  );
}
