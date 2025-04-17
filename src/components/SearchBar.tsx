import { Country } from "../utils/types";

interface Props {
  countries: Country[];
  setFiltered: (data: Country[]) => void;
}

const SearchBar = ({ countries, setFiltered }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    const result = countries.filter(
      (c) =>
        c.name.toLowerCase().includes(val) ||
        c.capital?.toLowerCase().includes(val)
    );
    setFiltered(result);
  };

  return (
    <div className="form-control mb-4 w-full md:w-1/2 mx-auto">
      <input
        type="text"
        placeholder="Search by name or capital..."
        onChange={handleChange}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default SearchBar;
