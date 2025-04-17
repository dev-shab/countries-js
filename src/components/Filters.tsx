import { Country } from "../utils/types";

interface Props {
  countries: Country[];
  setFiltered: (data: Country[]) => void;
}

const Filters = ({ countries, setFiltered }: Props) => {
  const regions = Array.from(new Set(countries.map((c) => c.region))).filter(
    Boolean
  );
  const timezones = Array.from(
    new Set(countries.map((c) => c.timezone))
  ).filter(Boolean);

  const handleFilter = (region: string, timezone: string) => {
    let result = countries;
    if (region) result = result.filter((c) => c.region === region);
    if (timezone) result = result.filter((c) => c.timezone === timezone);
    setFiltered(result);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <select
        className="select select-bordered"
        onChange={(e) => handleFilter(e.target.value, "")}
      >
        <option value="">All Regions</option>
        {regions.map((r, i) => (
          <option key={i} value={r}>
            {r}
          </option>
        ))}
      </select>
      <select
        className="select select-bordered"
        onChange={(e) => handleFilter("", e.target.value)}
      >
        <option value="">All Timezones</option>
        {timezones.map((tz, i) => (
          <option key={i} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
