import { useEffect } from "react";
import { HeroType } from "../types/HeroType";

interface HeroModalProps {
  hero: HeroType;
  onClose: () => void;
}

const HeroModal: React.FC<HeroModalProps> = ({ hero, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{hero.name} is the winner!</h2>
        <p>Powerstats:</p>
        <ul>
          {Object.entries(hero.powerstats).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HeroModal;
