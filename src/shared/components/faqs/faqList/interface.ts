import { ReactNode } from "react";

export interface FaqItems {
    title: string | ReactNode;
    element: ReactNode;
    asTag?: any;
}