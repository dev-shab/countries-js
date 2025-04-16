import { useEffect, useState } from "react";
import { Country } from "../utils/types";
import { getAllCountries } from "../utils/service";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [visibleCountries, setVisibleCountries] = useState<Country[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesData = await getAllCountries();
      setAllCountries(countriesData);
      setVisibleCountries(countriesData.slice(0, itemsPerPage));
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const loadMoreCountries = () => {
      if (isLoading || !hasMore) return;
      setIsLoading(true);
      setTimeout(() => {
        const nextCount = visibleCountries.length + itemsPerPage;
        const newCountries = allCountries.slice(0, nextCount);
        setVisibleCountries(newCountries);
        setIsLoading(false);
        if (newCountries.length === allCountries.length) {
          setHasMore(false);
        }
      }, 500);
    };
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        loadMoreCountries();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCountries, allCountries, hasMore, isLoading]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Country Explorer</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {visibleCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
      {isLoading && (
        <div className="text-center mt-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      {!hasMore && (
        <p className="text-center text-gray-500 mt-6">
          You have reached the end of list.
        </p>
      )}
    </div>
  );
};

export default Home;
