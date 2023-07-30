const Filter = ({ selectedRegion, onChange }) => {
  return (
    <select
      value={selectedRegion}
      onChange={onChange}
      className="h-14 p-3 pr-10 self-start rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white text-[#111517] dark:bg-[#2B3945] dark:text-[#F5F5FA]"
    >
      <option value={""}>Filter by Region</option>
      <option value={"All"}>All</option>
      <option value={"Africa"}>Africa</option>
      <option value={"Americas"}>Americas</option>
      <option value={"Asia"}>Asia</option>
      <option value={"Europe"}>Europe</option>
      <option value={"Oceania"}>Oceania</option>
    </select>
  );
};

export default Filter;
