import * as React from "react";
import { IReactKeyboardEvent, IReactMouseEvent } from "types";

type RefType<T> = React.MutableRefObject<T | null>;
type IOutsideClickEvent =
  | IReactMouseEvent<HTMLButtonElement>
  | IReactKeyboardEvent<HTMLElement>;
// NOTE: Reafctor this w/  proper types
export function useClickOutside<T>(node: RefType<T>) {
  const [isActive, setIsActive] = React.useState(false);

  const toggleMenu = () => {
    if (isActive) {
      setIsActive(false);
      return;
    }
    setIsActive(true);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: IOutsideClickEvent) => {
      const target = node?.current;
      console.log("TARGET**", target);

      // e.composedPath().includes(node.current)
      //@ts-expect-error
      if (target && target.contains(e.target)) return;
      setIsActive(false);
    };

    if (isActive) {
      //@ts-expect-error
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      //@ts-expect-error
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      //@ts-expect-error
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return { isActive, toggleMenu, closeMenu };
}
