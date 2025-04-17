import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Country } from "../utils/types";
import { getCountryByCode } from "../utils/service";

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (code) {
      const fetchCountry = async () => {
        const countryData = await getCountryByCode(code);
        setCountry(countryData);
      };
      fetchCountry();
    }
  }, [code]);

  if (!country)
    return (
      <div className="text-center mt-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
      <img
        src={country.flag}
        alt={country.name}
        className="w-full h-64 bg-cover rounded-lg mb-4"
      />
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Region:</strong> {country.region}
        </li>
        <li>
          <strong>Capital:</strong> {country.capital}
        </li>
        <li>
          <strong>Population:</strong> {country.population}
        </li>
        <li>
          <strong>Currency:</strong> {country.currency}
        </li>
        <li>
          <strong>Timezone:</strong> {country.timezone}
        </li>
      </ul>
    </div>
  );
};

export default CountryDetail;
