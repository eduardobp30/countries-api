"use client";

import { useState } from "react";
import CountryCard from "@/components/CountryCard";
import SearchBar from "@/components/SearchBar";

import Filter from "./Filter";

export default function CountriesList({ data }) {
  const [searchField, setSearchField] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-6 self-start w-full md:flex-row md:justify-between">
        <SearchBar onChange={(e) => setSearchField(e.target.value)} />

        <Filter
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-10 w-11/12 justify-self-center auto-rows-fr md:w-full md:col-span-3 md:grid-cols-2 md:justify-self-auto lg:grid-cols-4 lg:col-span-4">
        {(selectedRegion === "" || selectedRegion === "All") &&
          data
            .filter((el) =>
              el.name.common.toLowerCase().includes(searchField.toLowerCase())
            )
            .map((country, index) => (
              <CountryCard country={country} data={data} key={index} />
            ))}

        {data
          .filter((e) => e.region === selectedRegion)
          .map((country, index) => (
            <CountryCard country={country} data={data} key={index} />
          )).length === 0 && (
          <p className="text-center font-bold md:col-span-2 lg:col-span-4 dark:text-[#F5F5FA]">
            {`No results for "${searchField}" found.`}
          </p>
        )}

        {data
          .filter((el) =>
            el.name.common.toLowerCase().includes(searchField.toLowerCase())
          )
          .filter((e) => e.region === selectedRegion)
          .map((country, index) => (
            <CountryCard country={country} data={data} key={index} />
          ))}
      </div>
    </div>
  );
}
