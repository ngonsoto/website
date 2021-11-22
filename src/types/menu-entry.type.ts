export type MenuStatus = "soon" | "beta";

export type MenuEntry = {
  title: string;
  path: string;
  status: MenuStatus;
  subMenu?: MenuEntry[];
};
