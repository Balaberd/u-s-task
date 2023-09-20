import { ReactElement } from "react";

interface ISubtitle {
  name: string;
  path: string;
}

export interface INavigationMenu {
  title: string;
  icon: ReactElement;
  subtitleList: ISubtitle[];
}
