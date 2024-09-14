export interface ITeclaDeAtalho {
  keydown: keydown;
  actionString: typeAction;
}
export type typeAction = "Cliente" | "Veículo";
export type keydown = "F1" | "F2";
export type mapActionTeclaDeAtalho = Map<typeAction, () => void>;
