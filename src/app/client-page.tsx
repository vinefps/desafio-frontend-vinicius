"use client";

import { useState, useEffect } from "react";
import HeroList from "../components/HeroList";
import HeroSearch from "../components/HeroSearch";
import HeroModal from "../components/HeroModal";
import { HeroType } from "../types/HeroType";

interface ClientPageProps {
  heroes: HeroType[];
}

const ClientPage: React.FC<ClientPageProps> = ({ heroes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHeroes, setSelectedHeroes] = useState<HeroType[]>([]);
  const [winner, setWinner] = useState<HeroType | null>(null);

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHeroSelection = (hero: HeroType) => {
    setSelectedHeroes((prev) => {
      if (prev.some((selected) => selected.id === hero.id)) {
        return prev.filter((selected) => selected.id !== hero.id);
      } else if (prev.length < 2) {
        return [...prev, hero];
      } else {
        return [prev[1], hero];
      }
    });
  };

  //Pegar as keys da propriedade powerstats dos objetos hero1 e hero2, e através do reduce, retornar o acumulator.
  const compareHeroes = () => {
    if (selectedHeroes.length < 2) return;

    const [hero1, hero2] = selectedHeroes;

    const totalPower1 = Object.values(hero1.powerstats).reduce(
      (a, b) => a + b,
      0
    );
    const totalPower2 = Object.values(hero2.powerstats).reduce(
      (a, b) => a + b,
      0
    );

    setWinner(totalPower1 > totalPower2 ? hero1 : hero2);
  };

  useEffect(() => {
    if (selectedHeroes.length === 2) {
      compareHeroes();
    }
  }, [selectedHeroes]);

  const handleCloseModal = () => {
    setWinner(null);
    setSelectedHeroes([]);
  };

  return (
    <div className="container mx-auto p-4">
      <HeroSearch setSearchTerm={setSearchTerm} />
      <HeroList
        heroes={filteredHeroes}
        onHeroClick={handleHeroSelection}
        selectedHeroes={selectedHeroes}
      />
      {winner && <HeroModal hero={winner} onClose={handleCloseModal} />}
    </div>
  );
};

export default ClientPage;
