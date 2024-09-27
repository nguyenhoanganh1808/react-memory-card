import { useState } from "react";
import Header from "../components/Header";
import "../styles/layout.css";
import { useEffect } from "react";
import { fetchCardData } from "../../services/data";
import GridCardList from "../components/GridCardList";

export default function GameBoard() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const ignore = false;
    fetchCardData(12).then((result) => {
      if (!ignore) {
        setCharacters(result);
      }
    });
  });

  return (
    <>
      <Header />
      <GridCardList characters={characters} />
    </>
  );
}
