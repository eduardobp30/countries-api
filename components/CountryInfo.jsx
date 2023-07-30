import Image from "next/image";
import Link from "next/link";

const CountryInfo = ({ data, country }) => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-16 lg:items-center">
      <Image
        src={country[0].flags.svg}
        width={1200}
        height={600}
        alt={country[0].flags.alt}
        className="shadow-sm"
      ></Image>
      <div>
        <h1 className="font-bold text-3xl my-10 md:text-5xl lg:my-0">
          {country[0].name.common}
        </h1>
        <ul className="flex flex-col gap-2 my-4 md:grid md:grid-cols-2 lg:mt-8">
          <li>
            <span className="font-bold">Native name:</span>{" "}
            {country[0].name.nativeName
              ? Object.values(country[0].name.nativeName)[0].common
              : "NA"}
          </li>
          <li>
            <span className="font-bold">Population:</span>{" "}
            {country[0].population.toLocaleString()}
          </li>
          <li>
            <span className="font-bold">Region:</span> {country[0].region}
          </li>
          <li>
            <span className="font-bold">Sub Region:</span>{" "}
            {country[0].subregion ? country[0].subregion : "NA"}
          </li>
          <li>
            <span className="font-bold">Capital:</span>{" "}
            {country[0].capital ? country[0].capital : "NA"}
          </li>
          <li>
            <span className="font-bold">Top Level Domain:</span>{" "}
            {country[0].tld[0]}
          </li>
          <li>
            <span className="font-bold">Currency:</span>{" "}
            {country[0].currencies
              ? Object.values(country[0].currencies)[0].name
              : "NA"}
          </li>
          <li className="flex gap-2">
            <span className="font-bold">Languages:</span>
            <ul>
              {country[0].languages
                ? Object.values(country[0].languages).map((language, index) => (
                    <span key={index}>{(index ? ", " : "") + language}</span>
                  ))
                : "NA"}
            </ul>
          </li>
        </ul>
        <h2 className="font-bold mt-10 mb-4">Border Countries:</h2>
        <ul className="grid grid-cols-3 gap-4 auto-rows-fr">
          {country[0].borders ? (
            country[0].borders.map((country, index) => (
              <li
                key={index}
                className="rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-[#2B3945] dark:text-[#F5F5FA] ease-in-out duration-300 hover:opacity-75"
              >
                <Link
                  href={`/${data.find((obj) => obj.cca3 === country).cca2}`}
                  className="w-full h-full p-2 flex items-center justify-center text-center"
                >
                  {data.find((obj) => obj.cca3 === country).name.common}
                </Link>
              </li>
            ))
          ) : (
            <p>None</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CountryInfo;
