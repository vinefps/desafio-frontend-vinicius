interface HeroSearchProps {
  setSearchTerm: (term: string) => void;
}

const HeroSearch: React.FC<HeroSearchProps> = ({ setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a hero..."
        className="border p-2 rounded w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default HeroSearch;
