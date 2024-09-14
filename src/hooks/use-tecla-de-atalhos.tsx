import { useEffect } from "react";
import { ITeclaDeAtalho } from "../types";
import { actionsTeclasDeAtalho } from "../mock";

export function useTeclaDeAtalho(props: ITeclaDeAtalho[]) {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const prop = props.find((x) => x.keydown === event?.key);
      if (prop) {
        event?.preventDefault();
        const action = actionsTeclasDeAtalho.get(prop.actionString);
        if (action) {
          action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props]);
}
