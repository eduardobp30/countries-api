import CountriesList from "@/components/CountriesList";
import { countries } from "@/app/services/requestApi";

export default function Home() {
  return (
    <main className="px-4 mt-24 pt-6 pb-10 grid grid-cols-1 bg-[#FAFAFA] min-h-screen md:px-8 md:pt-10 dark:bg-[#202C37]">
      <CountriesList data={countries} />
    </main>
  );
}
