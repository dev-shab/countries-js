import { Country } from "../utils/types";
import { getLocalTime } from "../utils/timeUtils";
import { useNavigate } from "react-router";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="card w-80 bg-base-100 shadow-xl m-2"
      onClick={() => navigate(`/country/${country.code}`)}
    >
      <figure>
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="h-40 w-full bg-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country.name}</h2>
        <p>Region: {country.region}</p>
        <p>Current Time: {getLocalTime(country.timezone)}</p>
      </div>
    </div>
  );
};

export default CountryCard;
