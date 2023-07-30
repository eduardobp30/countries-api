import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";

const Button = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="flex items-center gap-2 pl-6 pr-8 py-2 my-2 mb-16 bg-white rounded-md text-lg max-w-max shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:pl-10 md:pr-12 dark:bg-[#2B3945]"
    >
      <MdKeyboardBackspace className="text-2xl" />
      {text}
    </Link>
  );
};

export default Button;
