import CountryCard from "@/components/CountryCard";

const SearchResults = ({ data, searchField, selectedRegion }) => {
  let result;
  if (selectedRegion === "" || selectedRegion === "All") {
    result = data
      .filter((el) =>
        el.name.common.toLowerCase().includes(searchField.toLowerCase())
      )
      .map((country, index) => (
        <CountryCard country={country} data={data} key={index} />
      ));
    return result.length != 0 ? (
      result
    ) : (
      <p className="text-center text-base font-bold md:col-span-2 md:text-lg lg:col-span-4  dark:text-[#F5F5FA]">
        {`No results for "${searchField}" found.`}
      </p>
    );
  } else {
    result = data
      .filter((e) => e.region === selectedRegion)
      .filter((el) =>
        el.name.common.toLowerCase().includes(searchField.toLowerCase())
      )
      .map((country, index) => (
        <CountryCard country={country} data={data} key={index} />
      ));
    return result.length != 0 ? (
      result
    ) : (
      <p className="text-center text-base font-bold md:col-span-2 md:text-lg lg:col-span-4  dark:text-[#F5F5FA]">
        {`No results for "${searchField}" found.`}
      </p>
    );
  }
};

export default SearchResults;
