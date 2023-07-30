import Image from "next/image";
import Link from "next/link";

const CountryCard = ({ country }) => {
  return (
    <Link
      href={`/${country.cca2}`}
      className="rounded-md overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white dark:bg-[#2B3945] dark:text-[#F5F5FA] ease-in-out duration-300 hover:opacity-75"
    >
      <div className="w-full relative pt-[60%] overflow-hidden">
        <Image
          src={country.flags.svg}
          fill={true}
          alt={country.flags.alt}
          className="w-full h-full top-0 left-0 object-cover"
        ></Image>
      </div>
      <div className="px-6 pt-8 pb-6">
        <h1 className="font-bold mb-4 text-2xl">{country.name.common}</h1>
        <ul className="flex flex-col gap-1">
          <li>
            <span className="font-bold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </li>
          <li>
            <span className="font-bold">Region:</span> {country.region}
          </li>
          <li>
            <span className="font-bold">Capital:</span>{" "}
            {country.capital ? country.capital : "NA"}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default CountryCard;
