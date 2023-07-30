import { getData } from "../services/requestApi";
import CountryInfo from "@/components/CountryInfo";
import Button from "@/components/Button";

async function getCountry(cca2) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`, {
    variables: {
      cca2: cca2,
    },
  });

  const data = await res.json();
  return data;
}

export default async function Country({ params }) {
  const country = await getCountry(params.cca2);
  const countries = await getData();

  console.log(country);
  return (
    <div className="px-6 py-10 pt-32 bg-[#FAFAFA] text-[#111517] min-h-screen md:px-8 lg:px-10 lg:pb-14 dark:bg-[#202C37] dark:text-[#F5F5FA]">
      <Button text="Back" link="/" />
      <CountryInfo country={country} data={countries} />
    </div>
  );
}
