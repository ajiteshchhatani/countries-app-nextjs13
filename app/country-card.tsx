import { CountryType } from "./countries";

interface CountryCardPropType {
  country: CountryType;
}

const CountryCard = ({ country }: CountryCardPropType) => {
  return (
    <div className="flex flex-col flex-wrap gap-2 border-2 border-gray-400 w-[22%] rounded-md">
      <div className="h-[60%]">
        <img
          src={country.flags.svg}
          className="w-full h-full object-cover"
          alt="Flag image"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 font-bold">{country.name}</h2>
        <p>Population:{country.population}</p>
        <p>Region:{country.region}</p>
        <p>Capital:{country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
