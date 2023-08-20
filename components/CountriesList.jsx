"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import SearchResults from "./SearchResults";

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
        <SearchResults
          data={data}
          selectedRegion={selectedRegion}
          searchField={searchField}
        />
      </div>
    </div>
  );
}
