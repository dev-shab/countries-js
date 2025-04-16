import { useEffect, useState } from "react";
import { Country } from "../utils/types";
import { getAllCountries } from "../utils/service";

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

  return <div>Home</div>;
};

export default Home;
