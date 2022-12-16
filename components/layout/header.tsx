import { links } from "common";
import { Logo, NavLink } from "components/atoms";
import { useEffect, useRef, useState } from "react";
import { IReactKeyboardEvent, IReactMouseEvent } from "types";

type Props = {};
type RefType<T> = React.MutableRefObject<T | null>;
type IOutsideClickEvent =
  | IReactMouseEvent<HTMLButtonElement>
  | IReactKeyboardEvent<HTMLElement>;

const Header = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const toggleMenu = () => {
    setIsActive((state) => !state);
  };

  const handleClickOutside = (e: IOutsideClickEvent) => {
    const isOutside = !e?.currentTarget?.closest?.("#primary-navigation");
    e?.stopPropagation?.();
    isOutside && setIsActive(false);
  };

  useEffect(() => {
    // @ts-expect-error
    if (isActive) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // @ts-expect-error
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <header className="sticky top-0">
      <div className="relative flex items-center justify-between bg-white py-12 md:py-16 md:h-container -md:px-[1.6rem]">
        <Logo className="" />

        <button
          className={`relative z-50 order-1 aspect-square w-[2.4rem] border-none bg-transparent ${
            isActive
              ? "bg-[url(/assets/close.svg)]"
              : "bg-[url(/assets/hamburger.svg)]"
          } bg-center bg-no-repeat transition-all md:hidden`}
          aria-controls="primary-navigation"
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span className="sr-only">Menu</span>
        </button>

        <nav className="w-3/4">
          <ul
            id="primary-navigation"
            className="fixed inset-0 left-[33%] flex flex-col items-start justify-center gap-16 bg-zinc-700/75 px-16 opacity-90 transition-transform duration-[800ms] ease-in-out supports-[backdrop-filter]:bg-zinc-500/[0.04] supports-[backdrop-filter]:opacity-100 supports-[backdrop-filter]:backdrop-blur-[2.2rem] md:static md:flex-row md:items-center md:bg-transparent -md:translate-x-full -md:py-12 -md:data-[visible=true]:translate-x-0 "
            aria-label="Primary Navigation"
            data-visible={isActive}
          >
            {links?.navigation?.map((link) => (
              <li key={link.text} className="hover:text-teal-500">
                <NavLink activeClassName="" href={link.url}>
                  <a
                    ref={anchorRef}
                    className=""
                    onClick={() => setIsActive(false)}
                  >
                    {link.text}
                  </a>
                </NavLink>
              </li>
            ))}

            <li className="md:last:ml-auto">
              <label
                htmlFor="theme-toggle"
                className="relative block h-10 w-20 cursor-pointer rounded-full border border-teal-500 bg-teal-100/25"
              >
                <input
                  type="checkbox"
                  name="theme-toggle"
                  id="theme-toggle"
                  className="peer sr-only"
                />
                <span className="peer-checked absolute top-1 left-1 h-4/5 w-2/5 rounded-full bg-transparent bg-[url(/assets/icon-moon.svg)] bg-center bg-no-repeat transition-all duration-500 peer-checked:left-11 peer-checked:bg-[url(/assets/icon-sun.svg)]"></span>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
