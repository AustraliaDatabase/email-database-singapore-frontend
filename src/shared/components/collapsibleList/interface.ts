import { ReactNode } from "react";

export interface ICollapsibleItem {
  title: string | ReactNode;
  element: ReactNode;
  asTag?: any;
}
