import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className="bg-[#5ba2b2] md:hidden lg:hidden  py-4 px-4 flex justify-between">
      <h2 className="text-black">LetUsRecon</h2>
      <div>
        <FontAwesomeIcon className="text-black-200 text-xl" icon={faBars} />
      </div>
    </nav>
  );
}
