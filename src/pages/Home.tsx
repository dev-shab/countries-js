import { useEffect, useState } from "react";
import { Country } from "../utils/types";
import { getAllCountries } from "../utils/service";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesData = await getAllCountries();
      setCountries(countriesData);
    };
    fetchCountries();
  }, []);

  console.log(countries);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Country Explorer</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
