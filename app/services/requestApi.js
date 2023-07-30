async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const sortedData = await data.sort(function (x, y) {
    let a = x.name.common,
      b = y.name.common;
    return a == b ? 0 : a > b ? 1 : -1;
  });

  return sortedData;
}

const countries = await getData();

async function getCountryName(country) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const name = await data[0].name.common;
  return name;
}

export { getData, getCountryName, countries };
