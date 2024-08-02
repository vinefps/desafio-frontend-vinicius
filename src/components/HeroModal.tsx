import React from "react";
import { HeroType } from "../types/HeroType";

interface HeroModalProps {
  hero: HeroType;
  onClose: () => void;
}

const HeroModal: React.FC<HeroModalProps> = ({ hero, onClose }) => {
  const { intelligence, strength, speed, durability, power, combat } = hero.powerstats;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{hero.name} é o vencedor!</h2>
        <p>Status de Poder:</p>
        <ul>
          <li>Inteligencia: {intelligence}</li>
          <li>Força: {strength}</li>
          <li>Velocidade: {speed}</li>
          <li>Durabilidade: {durability}</li>
          <li>Poder: {power}</li>
          <li>Combate: {combat}</li>
        </ul>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default HeroModal;
