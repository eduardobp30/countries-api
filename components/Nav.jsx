import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  return (
    <nav className="fixed w-full top-0 h-24 flex justify-between items-center px-6 py-12 bg-white text-[#111517] font-bold z-50 text-lg shadow-md md:px-8 lg:px-10 dark:bg-[#2B3945] dark:text-white">
      <h1>Where in the world?</h1>
      <ThemeToggle />
    </nav>
  );
};

export default Nav;
