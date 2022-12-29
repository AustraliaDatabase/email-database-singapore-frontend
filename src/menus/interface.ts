import { ReactNode } from "react";

export interface ISubPublicMenuItem {
    name: string;
    url: string;
}

export interface IMainPublicMenuItem {
    name: string;
    child?: ISubPublicMenuItem[];
    url?: string;
    width?: number;
}

export interface IGetIcon {
    [key: string]: ReactNode;
}