import { HeroType } from "../types/HeroType";

interface HeroListProps {
  heroes: HeroType[];
  onHeroClick: (hero: HeroType) => void;
  selectedHeroes: HeroType[];
}

const HeroList: React.FC<HeroListProps> = ({
  heroes,
  onHeroClick,
  selectedHeroes,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {heroes.map((hero) => {
        const isSelected = selectedHeroes.some(
          (selected) => selected.id === hero.id
        );
        return (
          <div
            key={hero.id}
            className={`bg-white rounded-lg shadow-md m-2 p-5 w-48 text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer ${
              isSelected ? "border-4 border-red-500" : ""
            }`}
            onClick={() => onHeroClick(hero)}
          >
            <img
              className="w-36 h-36 rounded-full object-cover mb-4 mx-auto"
              src={`${hero.images.lg}`}
              alt={`${hero.name} portrait`}
            />
            <h3 className="text-xl font-bold">{hero.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default HeroList;
