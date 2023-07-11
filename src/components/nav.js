import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineFilter } from "react-icons/hi";
import Link from "next/link";

export default function Nav({ activePage }) {
  //Set active page in navbar
  let home = "";
  let filter = "";
  if (activePage === "Home") {
    home = "active";
  }
  if (activePage === "Filter") {
    filter = "active";
  }

  // Component for navigation bar
  return (
    <nav className="flex block fixed w-max py-[0.7rem] px-[1.7rem] z-20 rounded-full">
      <Link href="/" id={home} className="tooltip" data-tip="Home">
        <AiOutlineHome />
      </Link>
      <Link href="/filter" id={filter} className="tooltip" data-tip="Filter">
        <HiOutlineFilter />
      </Link>
    </nav>
  );
}
