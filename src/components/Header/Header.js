import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useWindowSize } from "../../hooks/UseWindowSize";

const navMenuDesktop = [
  { id: 1, name: "Elaborar Peticion", href: "/transito-y-transporte" },
  { id: 2, name: "Blogs", href: "/#homeBlog" },
  { id: 3, name: "Nuestro Proceso", href: "/#HomeAccountFor" },
  { id: 4, name: "Personas", href: "/#home-people" },
];

const navMenuMobile = [
  { id: 1, name: "Elaborar Peticion", href: "/transito-y-transporte" },
  { id: 2, name: "Blogs", href: "/#homeBlog" },
];
const Header = () => {
  useWindowSize();

  const size = useWindowSize();
  const getArary = useCallback( () => {
    return size.width > 768 ? navMenuDesktop : navMenuMobile;
  }, [size])

  return (
    <div className="z-10 sticky top-0 rounded-2xl ">
      <header className="flex  rounded-2xl justify-between  max-w-4xl mx-auto shadow-surface-glass backdrop-blur bg-transparent">
        <Link href="/">
          <a className="mx-2">
            <Image src="/logo-dig.svg" alt="Logo" width=" 100" height="70" />
          </a>
        </Link>
        <nav className="flex ">
          <ul className="flex items-center">
            {getArary().map(({ id, name, href }) => (
              <Link href={href} key={id}>
                <a className="hover:underline active">
                  <li className="font-[500]">{name}</li>
                </a>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
