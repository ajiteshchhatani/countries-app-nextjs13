import CountryCard from "./country-card";

export interface CountryType {
  name: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  population: number;
  region: string;
  subregion: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  langugages: {
    [key: string]: string;
  };
  borders: string[];
}

const getCountriesData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Countries = async () => {
  const countries: Array<any> = await getCountriesData();
  const countryDetails: CountryType[] = countries.map((c) => {
    return {
      name: c.name.common,
      nativeName: c.name.nativeName,
      borders: c.borders,
      capital: c.capital,
      currencies: c.currencies,
      flags: c.flags,
      langugages: c.languages,
      population: c.population,
      region: c.region,
      subregion: c.subregion,
      tld: c.tld,
    };
  });
  return countryDetails.map((c) => <CountryCard key={c.name} country={c} />);
};

export default Countries;
