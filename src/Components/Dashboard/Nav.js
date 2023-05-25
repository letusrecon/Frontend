import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className="bg-[#5ba2b2] md:hidden lg:hidden  py-4 px-4 flex justify-between">
      <h2 className="text-black text-2xl">LetUsRecon</h2>
      <div className="mt-1">
        <FontAwesomeIcon className="text-black-200 text-2xl" icon={faBars} />
      </div>
    </nav>
  );
}
