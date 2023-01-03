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

export interface IHeaderLinks {
    name: string;
    route: string;
    index?: number;
    subMenu?: IHeaderLinks[];
}
