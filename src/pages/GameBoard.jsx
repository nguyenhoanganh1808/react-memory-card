import { useState } from "react";
import Header from "../components/Header";
import "../styles/layout.css";
import { useEffect } from "react";
import { fetchCardData, makeRandomArray } from "../../services/data";
import GridCardList from "../components/GridCardList";

export default function GameBoard() {
  const [characters, setCharacters] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

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
    console.log(selectedIds);
    if (selectedId) {
      // If the card is already click by user, display lose
      console.log("lose");
      // Reset the game
      setSelectedIds([]);
    } else {
      setSelectedIds([...selectedIds, selectedId]);
    }
  }

  return (
    <>
      <Header />
      <GridCardList characters={characters} handleClickCard={handleClickCard} />
    </>
  );
}
